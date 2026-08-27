import Image from "next/image";

export default function Logo({ large = false }: { large?: boolean }) {
  return (
    <a href="#" className="block w-fit" aria-label="Power Your Potential — home">
      <Image
        src="/images/logo-pyp.png"
        alt="Power Your Potential"
        width={524}
        height={284}
        priority={!large}
        className={`h-auto ${large ? "w-40" : "w-[5.75rem]"}`}
      />
    </a>
  );
}
