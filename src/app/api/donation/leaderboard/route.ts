import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Donation from "@/models/Donation";

export const runtime = "nodejs";
const CACHE_CONTROL = "public, s-maxage=60, stale-while-revalidate=300";

type LeaderboardDonor = {
  name: string;
  amount: number;
};

export async function GET() {
  try {
    await dbConnect();

    const leaderboard = await Donation.aggregate<LeaderboardDonor>([
      {
        $group: {
          _id: "$name",
          totalAmount: { $sum: "$amount" },
        },
      },
      { $sort: { totalAmount: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 0,
          name: "$_id",
          amount: "$totalAmount",
        },
      },
    ]);

    return NextResponse.json(
      {
        success: true,
        data: leaderboard,
      },
      {
        headers: {
          "Cache-Control": CACHE_CONTROL,
        },
      },
    );
  } catch (error) {
    console.error("Leaderboard fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leaderboard",
      },
      { status: 500 },
    );
  }
}
