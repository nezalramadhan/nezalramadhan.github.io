import { Mail } from "lucide-react";
import { formatURL } from "@/lib/format";
import { contact } from "@/data/profile";
import { Reveal } from "../ui/Reveal";
import { ResumeLink } from "../ui/ResumeLink";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../ui/BrandIcons";

const links = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: formatURL(contact.github),
    href: contact.github,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: formatURL(contact.linkedin),
    href: contact.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "WhatsApp",
    value: formatURL(contact.whatsapp),
    href: contact.whatsapp,
    Icon: WhatsappIcon,
    external: true,
  },
];

/**
 * Closing contact section. The big display line has the word "together"
 * knocked out of a hard-shadow acid-yellow block (DESIGN.md: the accent
 * lands at the key moment). Contact links are a stamped list separated by
 * 2px ink rules.
 *
 * Contact values are placeholders centralized in src/data/profile.ts; they
 * are never invented as if real (R-38).
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t-2 border-ink">
      <div className="container-brutal py-24 md:py-32">
        <Reveal>
          <h2 className="text-display max-w-5xl">
            Let&apos;s build{" "}
            <span className="inline-block bg-zap px-3 text-ink shadow-lift bs">
              something
            </span>{" "}
            together.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-lead mt-8 max-w-xl text-ink-soft">
            I am open to junior and graduate roles in web development and
            software engineering. If you have a product, a problem, or an
            idea to discuss, get in touch.
          </p>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <ResumeLink />
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {links.map((link, i) => {
              const Icon = link.Icon;
              return (
                <Reveal key={link.label} delay={i * 0.05}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 border-b-2 border-ink py-6 shadow-lift bs"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-ink text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                      <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-meta text-ink-soft">
                        {link.label}
                      </span>
                      <span className="mt-1 block break-all font-display text-base uppercase tracking-tight text-ink">
                        {link.value}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto mr-1 text-rush opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      →
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}