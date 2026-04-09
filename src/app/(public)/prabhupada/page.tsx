"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Heart, Sparkles } from "lucide-react";
import SectionHeader from "@/components/jp-bace/SectionHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const heroImages = [
  "https://res.cloudinary.com/dhmqkdh7w/image/upload/v1775728486/a21870_7ec67eeb99c049b6b07479c5d6e72c32_mv2_xc2ypv.avif",
  "https://res.cloudinary.com/dhmqkdh7w/image/upload/v1775729262/7_jq1ej5.avif",
  "https://res.cloudinary.com/dhmqkdh7w/image/upload/v1775729396/8_gssifq.jpg",
  "https://res.cloudinary.com/dhmqkdh7w/image/upload/v1775728928/6_jbktwx.jpg",
];

const biographyStory = [
  "Srila Prabhupada was born in 1896 in Calcutta (now Kolkata) as Abhay Charan De. From childhood, he was deeply connected with devotion and spiritual culture.",
  "In 1922, he met his spiritual master Bhaktisiddhanta Sarasvati Thakur, who inspired him to spread Vedic knowledge in English to the Western world.",
  "After years of preparation, at the age of 69, he traveled alone to the United States in 1965 with minimal resources, determined to fulfill his guru's instruction.",
];

const timeline = [
  { year: "1896", event: "Birth in Calcutta" },
  { year: "1922", event: "Meets spiritual master" },
  { year: "1933", event: "Initiation" },
  { year: "1959", event: "Accepts sannyasa" },
  { year: "1965", event: "Travels to USA" },
  { year: "1966", event: "Establishes ISKCON" },
  { year: "1977", event: "Leaves this world in Vrindavan" },
];

const teachings = [
  "Chanting Hare Krishna mantra",
  "Bhakti Yoga (Devotional service)",
  "Simple living, high thinking",
  "Study of Bhagavad Gita & Vedic scriptures",
  "Compassion and universal brotherhood",
];

export default function PrabhupadaPage() {
  return (
    <main className="bg-beige-soft text-charcoal">
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="Temple courtyard representing Srila Prabhupada's spiritual mission"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/75" />
        </div>

        <Container className="relative max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-saffron md:text-sm">
              Founder-Acharya of ISKCON
            </p>
            <h1 className="text-4xl font-serif font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Srila Prabhupada
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-beige md:text-lg">
              A spiritual visionary who carried the timeless wisdom of Krishna consciousness across
              the world, transforming millions of lives through devotion, knowledge, and compassion.
            </p>

            <div className="mt-8 flex justify-center">
              <a href="#biography-story">
                <Button variant="primary" size="md">
                  Explore His Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>

        <Container className="relative mt-16 max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-white/20 shadow-lg"
              >
                <div className="relative h-56">
                  <Image
                    src={image}
                    alt={`Devotional heritage image ${index + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="biography-story" className="py-20">
        <Container className="max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-black/5 shadow-lg"
            >
              <div className="relative h-96">
                <Image
                  src="https://res.cloudinary.com/dhmqkdh7w/image/upload/v1775728669/4_tdzhjb.jpg"
                  alt="Temple passage symbolizing Srila Prabhupada's life journey"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg md:p-8"
            >
              <SectionHeader
                heading="Biography."
                subheading="FOUNDER-ACHARYA OF ISKCON."
                className="mb-6"
              />

              <div className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
                {biographyStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-20 text-beige">
        <Container className="max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-saffron md:text-sm">
              Journey to the West
            </p>
            <h2 className="text-3xl font-serif font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              At an age when most retire, he began his greatest mission.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-beige md:text-lg">
              With no money, no support, and only faith, Srila Prabhupada arrived in New York.
              From humble beginnings, chanting in parks and speaking to small groups, he sparked
              a global spiritual movement.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-7xl space-y-10 px-6">
          <SectionHeader
            heading="Timeline."
            subheading="MILESTONES OF A GLOBAL MISSION."
            centered
            className="mx-auto max-w-3xl"
          />

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg md:p-8"
          >
            <ol className="relative space-y-8 border-l-2 border-saffron/30 pl-8">
              {timeline.map((point) => (
                <li key={point.year} className="relative">
                  <span className="absolute -left-9 mt-1 h-4 w-4 rounded-full border-2 border-saffron bg-beige-soft" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-saffron">{point.year}</p>
                  <p className="mt-1 text-base text-charcoal-light md:text-lg">{point.event}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 rounded-xl bg-beige p-4 text-base text-charcoal-light md:text-lg">
              ISKCON was officially founded in 1966 in New York.
            </p>
          </motion.article>
        </Container>
      </section>

      <section className="py-20 pt-0">
        <Container className="max-w-7xl space-y-10 px-6">
          <SectionHeader
            heading="Teachings."
            subheading="PRACTICAL WISDOM FOR EVERYDAY LIFE."
            centered
            className="mx-auto max-w-3xl"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachings.map((teaching) => (
              <motion.article
                key={teaching}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-saffron/10 p-2 text-saffron">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-base font-medium leading-relaxed text-charcoal md:text-lg">{teaching}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-7xl space-y-10 px-6">
          <SectionHeader
            heading="Books & Contributions."
            subheading="SCRIPTURAL LEGACY FOR THE WORLD."
            centered
            className="mx-auto max-w-3xl"
          />

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg md:p-8"
          >
            <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
              Srila Prabhupada translated and wrote more than <strong className="text-charcoal">70+ books</strong> on Vedic knowledge, including core works that continue to guide spiritual seekers globally.
            </p>

            <ul className="mt-6 space-y-3 text-base text-charcoal-light md:text-lg">
              <li className="flex items-center gap-3">
                <BookOpenText className="h-5 w-5 text-saffron" aria-hidden="true" />
                <span>Bhagavad-gita As It Is</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpenText className="h-5 w-5 text-saffron" aria-hidden="true" />
                <span>Srimad Bhagavatam</span>
              </li>
              <li className="flex items-center gap-3">
                <BookOpenText className="h-5 w-5 text-saffron" aria-hidden="true" />
                <span>Teachings of Lord Chaitanya</span>
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-charcoal-light md:text-lg">
              His books are used globally and translated into many languages.
            </p>
          </motion.article>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-7xl space-y-10 px-6">
          <SectionHeader
            heading="Legacy."
            subheading="GLOBAL KRISHNA-MISSION."
            centered
            className="mx-auto max-w-3xl"
          />

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-beige-soft p-6 shadow-lg md:p-8"
          >
            <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
              From a single journey to America, Srila Prabhupada built a global movement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-light md:text-lg">
              Today, ISKCON has hundreds of temples, communities, and millions of followers
              worldwide. His teachings continue to guide generations toward a life of purpose,
              discipline, and devotion.
            </p>
          </motion.article>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-saffron/20 bg-white p-6 shadow-lg"
            >
              <Sparkles className="mb-3 h-5 w-5 text-saffron" aria-hidden="true" />
              <p className="text-xl font-serif text-charcoal">"The purpose of life is to revive our love for God."</p>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-saffron/20 bg-white p-6 shadow-lg"
            >
              <Sparkles className="mb-3 h-5 w-5 text-saffron" aria-hidden="true" />
              <p className="text-xl font-serif text-charcoal">"Chant and be happy."</p>
            </motion.blockquote>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-7xl px-6">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-black/5 bg-white p-8 shadow-lg"
          >
            <SectionHeader
              heading="Connect to ISKCON Bhopal BYC."
              subheading="CONTINUING THE MISSION TODAY."
              className="mb-6"
            />
            <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
              ISKCON continues the mission of Srila Prabhupada by guiding through
              spiritual knowledge, discipline, and community.
            </p>
          </motion.article>
        </Container>
      </section>
    </main>
  );
}
