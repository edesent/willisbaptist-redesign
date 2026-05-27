export const site = {
  name: "Willis Baptist Church",
  shortName: "Willis Baptist",
  tagline: "Shining the light of the Gospel in the darkness of this world.",
  city: "Willis, Michigan",
  addressLine1: "8687 Bunton Rd.",
  addressLine2: "Willis, MI 48191",
  address: "8687 Bunton Rd., Willis, MI 48191",
  mailingAddress: "PO Box 39, Willis, MI 48191",
  phone: "(734) 461-0352",
  email: "WBC@willisbaptist.org",
  verse:
    "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
  verseReference: "Proverbs 3:5-6",
  originalUrl: "https://www.willisbaptist.org/",
  mapUrl: "https://maps.google.com/?q=8687+Bunton+Rd,+Willis,+MI+48191",
  facebook: "https://www.facebook.com/Willis-Baptist-Church-117478031605444/",
};

export const primaryNav = [
  ["Home", "/"],
  ["Visit", "/visit"],
  ["Beliefs", "/beliefs"],
  ["Ministries", "/ministries"],
  ["Legacy", "/legacy"],
  ["Gospel", "/gospel"],
  ["Contact", "/contact"],
] as const;

export const heroStats = [
  ["Sunday gatherings", "Sunday School 9:45 AM · Morning Worship 11:00 AM · Evening 6:00 PM"],
  ["Midweek gathering", "Wednesday Bible study at 7:00 PM"],
  ["Address", "8687 Bunton Rd. in Willis, Michigan"],
] as const;

export const serviceTimes = [
  {
    title: "Sunday School",
    time: "9:45 AM",
    detail: "Classes and Bible teaching for children, teens, and adults.",
  },
  {
    title: "Morning Worship",
    time: "11:00 AM",
    detail: "Congregational worship and preaching from the King James Bible.",
  },
  {
    title: "Sunday Evening",
    time: "6:00 PM",
    detail: "An evening service centered on preaching, prayer, and fellowship.",
  },
  {
    title: "Wednesday Bible Study",
    time: "7:00 PM",
    detail: "A midweek time to grow in Scripture together.",
  },
  {
    title: "Reformers Unanimous",
    time: "Friday 7:00-9:00 PM",
    detail: "A Christ-centered addictions ministry led by Tim and Lora Johnson.",
  },
] as const;

export const welcomePoints = [
  {
    title: "Historic faith, warm welcome",
    body: "Willis Baptist has served families in this area for decades with straightforward preaching, caring people, and a deep desire to point others to Christ.",
  },
  {
    title: "A church for the whole family",
    body: "From Sunday School and youth activities to the bus ministry and ladies missions work, the church's rhythm has always been multi-generational.",
  },
  {
    title: "Clear gospel emphasis",
    body: "The message of salvation is central to who we are. We want every visitor to hear plainly that Jesus Christ saves sinners by grace through faith.",
  },
] as const;

export const ministries = [
  {
    slug: "sunday-school",
    title: "Sunday School",
    summary: "Bible teaching for all ages and one of the core weekly touchpoints for the church family.",
    details: [
      "Classes for children, teens, and adults.",
      "A long-running part of the church's weekly rhythm.",
      "Designed to help members grow through regular Bible study.",
    ],
  },
  {
    slug: "bus-ministry",
    title: "Bus Ministry",
    summary: "For decades the church's bus ministry has brought children to Sunday School and church while building lasting relationships.",
    details: [
      "Neighborhood outreach through transportation and relationships.",
      "Focused on children and families who may need help getting to church.",
      "A longstanding part of the church's identity.",
    ],
  },
  {
    slug: "youth-group",
    title: "Youth Group",
    summary: "Teen camp, outreach, and discipleship opportunities that move students from attendance to service.",
    details: [
      "Teen camp outings and group activities.",
      "Regular opportunities to minister to others.",
      "Designed to build conviction, fellowship, and joyful service.",
    ],
  },
  {
    slug: "ladies-missionary-society",
    title: "Ladies Missionary Society",
    summary: "Women of the church assisting and encouraging missionaries serving around the world.",
    details: [
      "Prayer and encouragement for missionaries.",
      "A practical expression of the church's global concern.",
      "A multi-generational support ministry.",
    ],
  },
  {
    slug: "reformers-unanimous",
    title: "Reformers Unanimous",
    summary: "An addictions program built on the timeless principles of Scripture, offered in a warm, non-threatening setting.",
    details: [
      "Led by Tim and Lora Johnson.",
      "Meets Fridays from 7:00 to 9:00 PM.",
      "Hosted in the Sunday School building.",
    ],
  },
  {
    slug: "media",
    title: "Music and Media",
    summary: "Sermon audio, music, and archived teaching help the church family keep Scripture and worship close throughout the week.",
    details: [
      "A growing place for sermons, music, and special services.",
      "Helpful for members who are traveling, shut in, or catching up.",
      "A way to remember God's faithfulness through the church's ministry.",
    ],
  },
] as const;

export const beliefs = [
  {
    title: "The Scriptures",
    body: "We believe in the divine inspiration, authority, and preservation of the Word of God as contained in the King James Version of the Bible, and that Scripture should be interpreted in its historical, literal, and grammatical setting.",
  },
  {
    title: "Man and Sin",
    body: "We believe mankind was created by the direct act of God and without sin in his original state, but through Adam's fall the whole race was plunged into sin and stands unable to earn God's favor.",
  },
  {
    title: "Jesus Christ",
    body: "We believe in the virgin birth of Jesus Christ, that He is God in human flesh, without sin, and that His blood atonement on the cross is the full and sufficient payment for sin.",
  },
  {
    title: "Salvation by Grace through Faith",
    body: "We believe salvation comes by grace through faith alone in the finished work of Jesus Christ, not by human effort or merit.",
  },
  {
    title: "The Return of Christ",
    body: "We believe in the imminent, pre-millennial, pre-tribulational rapture of the church and the certainty of final judgment before God.",
  },
  {
    title: "Holy Living",
    body: "We believe Christians should be separated from worldliness and live with vigilance, faithfulness, and readiness before God.",
  },
] as const;

export const legacyMoments = [
  "Founding Pastor Dr. Jim McKinnies has been publicly honored for more than four decades of faithful ministry at Willis Baptist Church.",
  "The church celebrated its 40th anniversary and the conferring of a Doctor of Divinity degree in October 2019.",
  "That long continuity remains part of the church's testimony of faithfulness, gratitude, and perseverance.",
] as const;

export const gospelSteps = [
  {
    title: "1. Every person is a sinner",
    body: "Scripture begins with the truth that every person stands in need of mercy and cannot save himself.",
  },
  {
    title: "2. Sin carries a real penalty",
    body: "God's holiness requires judgment, so our deepest need is not self-improvement but reconciliation with God.",
  },
  {
    title: "3. Christ paid the price",
    body: "Jesus Christ, God in the flesh and without sin, died for sinners and rose again, providing the only sure hope of salvation.",
  },
  {
    title: "4. Receive Him by faith",
    body: "Salvation is received by faith, not earned by works. The invitation is to call upon the Lord Jesus Christ and be saved.",
  },
] as const;

export const contactCards = [
  {
    label: "Call the church",
    value: site.phone,
    href: "tel:7344610352",
  },
  {
    label: "Email the church",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Get directions",
    value: site.address,
    href: site.mapUrl,
  },
] as const;
