"use client";

export default function ContactSafe({
  variant = "default",
}: {
  variant?: "default" | "large";
}) {
  const emailUser = "tomasz";
  const emailDomain = "tomaszuscinski.pl";
  const email = `${emailUser}@${emailDomain}`;

  const phoneRaw = "+48787417293";
  const phoneDisplay = "+48 787 417 293";

  const sizeClass =
    variant === "large"
      ? "text-lg md:text-xl font-medium"
      : "text-sm text-gray-600";

  return (
    <div className={`flex flex-col gap-2 ${sizeClass}`}>
      {/* honeypot */}
      <span style={{ display: "none" }}>
        {emailUser}spam@{emailDomain}
      </span>

      <a href={`mailto:${email}`} className="hover:underline">
        {email}
      </a>

      <a href={`tel:${phoneRaw}`} className="hover:underline">
        {phoneDisplay}
      </a>
    </div>
  );
}
