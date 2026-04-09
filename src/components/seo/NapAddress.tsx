interface NapAddressProps {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  url?: string;
  className?: string;
}

export default function NapAddress({
  name = "IYF Bhopal (ISKCON Youth Forum)",
  street = "Prabhupada Marg, Near Mansarobar College, Kolar",
  city = "Bhopal",
  state = "Madhya Pradesh",
  postalCode = "462042",
  country = "India",
  phone = "+91 99931 01901",
  url = "https://iyfbhopal.in",
  className = "",
}: NapAddressProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className={`rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 ${className}`.trim()}
    >
      <p className="font-semibold text-white" itemProp="name">
        {name}
      </p>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="mt-2">
        <span itemProp="streetAddress">{street}</span>, <span itemProp="addressLocality">{city}</span>,{" "}
        <span itemProp="addressRegion">{state}</span> - <span itemProp="postalCode">{postalCode}</span>,{" "}
        <span itemProp="addressCountry">{country}</span>
      </div>
      <p className="mt-2">
        Phone: <span itemProp="telephone">{phone}</span>
      </p>
      <p>
        Website: <a href={url} itemProp="url" className="text-saffron hover:text-saffron-light">{url}</a>
      </p>
    </div>
  );
}
