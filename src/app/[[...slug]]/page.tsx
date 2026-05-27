import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Bus,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Cross,
  Globe,
  HeartHandshake,
  LifeBuoy,
  type LucideIcon,
  MapPin,
  MessageCircleHeart,
  Music,
  Phone,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  beliefs,
  contactCards,
  gospelSteps,
  heroStats,
  legacyMoments,
  ministries,
  primaryNav,
  serviceTimes,
  site,
  welcomePoints,
} from "@/lib/site";

type Params = {
  slug?: string[];
};

const titleMap: Record<string, string> = {
  home: "",
  visit: "Visit",
  beliefs: "Beliefs",
  ministries: "Ministries",
  legacy: "Legacy",
  gospel: "The Gospel",
  contact: "Contact",
};

const aliases: Record<string, keyof typeof titleMap> = {
  "": "home",
  home: "home",
  visit: "visit",
  "weekly-schedule": "visit",
  "upcoming-events": "visit",
  beliefs: "beliefs",
  "what-we-believe": "beliefs",
  ministries: "ministries",
  media: "ministries",
  "reformers-unanamous": "ministries",
  "reformers-unanimous": "ministries",
  "bus-ministry": "ministries",
  "youth-group": "ministries",
  "ladies-missionary-society": "ministries",
  "sunday-school": "ministries",
  gallery: "ministries",
  "church-activities": "ministries",
  staff: "legacy",
  legacy: "legacy",
  gospel: "gospel",
  "the-good-news": "gospel",
  contact: "contact",
};

const ministryIcons: Record<string, LucideIcon> = {
  "sunday-school": BookOpen,
  "bus-ministry": Bus,
  "youth-group": Users,
  "ladies-missionary-society": Globe,
  "reformers-unanimous": LifeBuoy,
  media: Music,
};

function routeKey(params: Params) {
  const slug = params.slug ?? [];
  return slug.join("/");
}

function normalizeKey(key: string) {
  return aliases[key] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const key = normalizeKey(routeKey(await params));
  if (!key || key === "home") return {};
  return { title: titleMap[key] };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const key = normalizeKey(routeKey(await params));

  switch (key) {
    case "home":
      return <HomePage />;
    case "visit":
      return <VisitPage />;
    case "beliefs":
      return <BeliefsPage />;
    case "ministries":
      return <MinistriesPage />;
    case "legacy":
      return <LegacyPage />;
    case "gospel":
      return <GospelPage />;
    case "contact":
      return <ContactPage />;
    default:
      notFound();
  }
}

function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="sub-hero">
      <div className="shell sub-hero-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="sub-hero-copy">{body}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Willis, Michigan</p>
            <h1>Willis Baptist Church</h1>
            <p className="hero-lede">
              A local church family seeking to shine the light of the Gospel in the darkness of
              this world through faithful preaching, warm fellowship, and ministry to our community.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/visit">
                Plan a Visit <ArrowRight size={18} />
              </Link>
              <Link className="button button-secondary" href="/gospel">
                Read the Gospel Message
              </Link>
            </div>
            <div className="hero-stat-grid">
              {heroStats.map(([label, value]) => (
                <article className="hero-stat" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame hero-frame-main">
              <Image
                src="/willis/anniversary.jpg"
                alt="Dr. Jim McKinnies receiving recognition during a Willis Baptist Church anniversary celebration."
                fill
                priority
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </div>
            <div className="hero-frame hero-frame-portrait">
              <Image
                src="/willis/pastor.jpg"
                alt="Portrait of Dr. Jim and Mrs. McKinnies."
                fill
                sizes="(max-width: 900px) 70vw, 18vw"
              />
            </div>
            <aside className="hero-card">
              <p className="hero-card-title">Welcome to Willis Baptist Church</p>
              <span className="hero-card-label">Scripture focus</span>
              <blockquote>{site.verse}</blockquote>
              <cite>{site.verseReference}</cite>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell intro-grid">
          <div>
            <p className="eyebrow">Our Church Family</p>
            <h2>Historic faith, steady ministry, and a clear gospel witness.</h2>
          </div>
          <div className="stack-cards">
            {welcomePoints.map((point) => (
              <article className="info-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell services-layout">
          <div className="section-heading">
            <p className="eyebrow">Weekly rhythm</p>
            <h2>Gather with us throughout the week.</h2>
            <p>
              From Sunday School and worship services to Wednesday Bible study and Friday Reformers
              Unanimous, there are regular opportunities to grow in the Word and serve together.
            </p>
          </div>
          <div className="service-grid">
            {serviceTimes.map((service) => (
              <article className="service-card" key={service.title}>
                <Clock3 size={19} />
                <h3>{service.title}</h3>
                <strong>{service.time}</strong>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="shell photo-story">
          <div className="photo-stack">
            <div className="photo-panel large">
              <Image
                src="/willis/bus-ministry.jpg"
                alt="Willis Baptist Church bus ministry vehicle."
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
            </div>
            <div className="photo-panel small">
              <Image
                src="/willis/teen-camp.jpg"
                alt="Teens gathered at camp."
                fill
                sizes="(max-width: 900px) 100vw, 24vw"
              />
            </div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Ministry snapshot</p>
            <h2>Ministry reaches across generations.</h2>
            <p>
              Bus routes, youth events, missionary support, Sunday School, and Reformers Unanimous
              give children, teens, adults, and families meaningful ways to hear truth and serve the
              Lord together.
            </p>
            <Link className="text-link" href="/ministries">
              Explore ministries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell legacy-feature">
          <div className="legacy-copy">
            <p className="eyebrow">Founding pastor</p>
            <h2>Thankful for decades of faithful pastoral ministry.</h2>
            <p>
              Willis Baptist Church is grateful for the faithful service of Dr. Jim McKinnies and
              the long testimony of the church family God has built through the years.
            </p>
            <ul className="check-list">
              {legacyMoments.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link className="button button-dark" href="/legacy">
              View church legacy
            </Link>
          </div>
          <div className="legacy-visual">
            <div className="legacy-portrait">
              <Image
                src="/willis/pastor.jpg"
                alt="Portrait of Dr. Jim and Mrs. McKinnies."
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gospel">
        <div className="shell gospel-band">
          <div>
            <p className="eyebrow">The central message</p>
            <h2>The good news of Jesus Christ is our central message.</h2>
            <p>
              More than service times or ministry programs, our desire is that every person would
              know the forgiveness and new life found only in the Lord Jesus Christ.
            </p>
          </div>
          <Link className="button button-primary" href="/gospel">
            Read The Good News
          </Link>
        </div>
      </section>
    </>
  );
}

function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit Willis Baptist"
        title="Service times, directions, and what to expect."
        body="We would be glad to welcome you for Sunday School, worship, Wednesday Bible study, or one of the church's weekly ministries."
      />

      <section className="section">
        <div className="shell visit-grid">
          <div className="card-surface">
            <p className="eyebrow">Location</p>
            <h2>{site.address}</h2>
            <p>
              Willis Baptist Church is located on Bunton Road in Willis, Michigan. If you are
              planning your first visit, you are welcome to call ahead or simply join us at the next
              scheduled service.
            </p>
            <div className="action-stack">
              <a className="button button-primary" href={site.mapUrl} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="button button-secondary" href="tel:7344610352">
                Call the Church
              </a>
            </div>
          </div>

          <div className="service-grid">
            {serviceTimes.map((service) => (
              <article className="service-card compact" key={service.title}>
                <CalendarDays size={19} />
                <h3>{service.title}</h3>
                <strong>{service.time}</strong>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Believe"
        title="Historic Baptist convictions rooted in Scripture."
        body="Our faith rests on the inspired and preserved Word of God, the finished work of Jesus Christ, and the promise of salvation by grace through faith."
      />

      <section className="section">
        <div className="shell beliefs-grid">
          {beliefs.map((belief) => (
            <article className="belief-card" key={belief.title}>
              <BookMarked size={18} />
              <h2>{belief.title}</h2>
              <p>{belief.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Church Life"
        title="Ministries for every generation."
        body="Willis Baptist Church serves families through Bible teaching, outreach, missions support, youth ministry, and Christ-centered help for those battling addictions."
      />

      <section className="section">
        <div className="shell ministry-grid">
          {ministries.map((ministry) => {
            const Icon = ministryIcons[ministry.slug] ?? HeartHandshake;
            return (
              <article className="ministry-card" id={ministry.slug} key={ministry.slug}>
                <Icon size={22} />
                <h2>{ministry.title}</h2>
                <p>{ministry.summary}</p>
                <ul className="bullet-list">
                  {ministry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function LegacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Church Legacy"
        title="Honoring faithful pastoral leadership."
        body="The church gives thanks for decades of faithful pastoral leadership and for God's continued work through the Willis Baptist family."
      />

      <section className="section">
        <div className="shell legacy-page-grid">
          <div className="legacy-panel">
            <div className="legacy-panel-image">
              <Image
                src="/willis/pastor.jpg"
                alt="Portrait of Dr. Jim and Mrs. McKinnies."
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
              />
            </div>
            <div className="legacy-panel-copy">
              <p className="eyebrow">Founding Pastor</p>
              <h2>Dr. Jim McKinnies</h2>
              <p>
                Willis Baptist Church celebrates Dr. and Mrs. McKinnies for founding the church
                and thanks them for decades of faithful service, pastoral care, and gospel witness.
              </p>
            </div>
          </div>

          <div className="card-surface">
            <p className="eyebrow">Milestones</p>
            <h2>Remembering God&apos;s faithfulness.</h2>
            <ul className="check-list">
              {legacyMoments.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function GospelPage() {
  return (
    <>
      <PageHero
        eyebrow="The Good News"
        title="Jesus Christ came to save sinners."
        body="The Bible teaches that every person needs salvation, that Christ paid the price for sin, and that anyone who calls upon the Lord by faith can be saved."
      />

      <section className="section">
        <div className="shell gospel-grid">
          {gospelSteps.map((step) => (
            <article className="gospel-card" key={step.title}>
              <Cross size={18} />
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell card-surface gospel-cta">
          <MessageCircleHeart size={22} />
          <h2>If you would like to talk with someone, the church makes that invitation directly.</h2>
          <p>
            If you have trusted Christ or have questions about salvation, we would be glad to hear
            from you and point you to the promises of Scripture.
          </p>
          <div className="action-stack">
            <a className="button button-primary" href={`mailto:${site.email}`}>
              Email the Church
            </a>
            <a className="button button-secondary" href="tel:7344610352">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would be glad to hear from you."
        body="Reach out to the church office, send an email, or get directions to visit Willis Baptist Church in person."
      />

      <section className="section">
        <div className="shell contact-grid">
          {contactCards.map((card) => (
            <a
              className="contact-card"
              href={card.href}
              key={card.label}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {card.label.includes("Call") ? (
                <Phone size={20} />
              ) : card.label.includes("Email") ? (
                <MessageCircleHeart size={20} />
              ) : (
                <MapPin size={20} />
              )}
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-band">
        <div className="shell card-surface">
          <p className="eyebrow">Explore</p>
          <h2>Quick links</h2>
          <div className="nav-map">
            {primaryNav.map(([label, href]) => (
              <Link className="nav-map-item" href={href} key={href}>
                <HeartHandshake size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
