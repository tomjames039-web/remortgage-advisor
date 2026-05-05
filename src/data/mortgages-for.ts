export interface MortgagesFor {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedPages: string[];
}

export const mortgagesFor: MortgagesFor[] = [
  {
    slug: "self-employed",
    title: "Mortgages for Self Employed",
    metaTitle: "Mortgages for Self Employed - Expert Advice | Remortgage Advisor",
    metaDescription: "Self employed mortgage advice for sole traders, contractors and company directors. Compare deals from lenders who understand self-employment.",
    heroTitle: "Mortgages for Self Employed",
    heroDescription: "Being self employed doesn't have to make getting a mortgage difficult. We know which lenders work best for your situation.",
    content: [
      {
        heading: "Self Employed Mortgage Options",
        paragraphs: [
          "Self employment comes in many forms - sole traders, partnerships, limited company directors, and contractors all have different income structures. Lenders assess each type differently, and what works for one self-employed borrower may not suit another. The key to success is finding lenders whose criteria match your specific circumstances, particularly if you're looking to remortgage and want to ensure a smooth application process.",
          "Many high street lenders have become more accommodating to self-employed applicants in recent years. However, specialist lenders often offer more flexibility, especially for complex income situations or where traditional affordability calculations don't capture your true earning capacity.",
        ],
      },
      {
        heading: "Documentation Requirements",
        paragraphs: [
          "Most lenders require at least two years of accounts or tax returns for self-employed applicants. You'll typically need SA302 tax calculations from HMRC along with corresponding tax year overviews. Limited company directors should also have company accounts prepared by an accountant. Some lenders will consider applications with just one year's evidence, though options are more limited.",
          "Prepare your documents before applying to speed up the process. Lenders may also request bank statements showing business income, contracts for ongoing work, and projections for future earnings in some circumstances.",
        ],
      },
      {
        heading: "How Lenders Calculate Self Employed Income",
        paragraphs: [
          "Income calculations vary significantly between lenders. Sole traders and partnerships are usually assessed on net profit (before personal tax). For limited company directors, some lenders use salary plus dividends drawn, while others consider your share of net profit or retained earnings. This means the same accounts can produce very different borrowing amounts depending on which lender you approach.",
          "Our brokers understand these differences and can identify which lenders will offer the best affordability calculation for your specific income structure. This knowledge can significantly increase your borrowing capacity.",
        ],
      },
      {
        heading: "Contractors and IR35",
        paragraphs: [
          "Contractors face additional complexity, particularly around IR35 status. Some specialist lenders offer contractor-specific products that calculate affordability based on your daily rate rather than dividends, potentially increasing borrowing capacity significantly. These products recognise the stability of contract work and the earning potential it represents.",
          "Whether you work inside or outside IR35, through an umbrella company or your own limited company, there are mortgage options available. Our brokers can match you with lenders who understand contractor income.",
        ],
      },
    ],
    relatedPages: ["contractors", "bad-credit", "landlords"],
  },
  {
    slug: "first-time-buyers",
    title: "Mortgages for First Time Buyers",
    metaTitle: "Mortgages for First Time Buyers - Compare Deals | Remortgage Advisor",
    metaDescription: "First time buyer mortgage advice and deals. Compare rates from 100+ lenders, understand deposit requirements and government schemes.",
    heroTitle: "Mortgages for First Time Buyers",
    heroDescription: "Your first mortgage is a big step. Get expert guidance and access to competitive rates from lenders across the market.",
    content: [
      {
        heading: "Starting Your Property Journey",
        paragraphs: [
          "Buying your first home is exciting but can feel overwhelming. From understanding affordability to choosing between fixed and variable rates, there's a lot to consider. The good news is that many lenders offer products specifically designed for first time buyers, sometimes with preferential rates, cashback offers, or reduced fees.",
          "As a first time buyer, you'll need to consider how much deposit you can save, what monthly payments you can afford, and which type of mortgage suits your circumstances. Understanding these factors helps ensure you choose a deal that works for you now and in the future.",
        ],
      },
      {
        heading: "Deposit Requirements",
        paragraphs: [
          "Most lenders require a minimum 5% deposit, though larger deposits unlock better rates. Each threshold - 10%, 15%, 20%, 25% - typically brings improved rates. The jump from 5% to 10% deposit often makes the biggest difference to available rates and monthly payments.",
          "If saving a deposit seems challenging, consider government schemes like Shared Ownership or the Lifetime ISA bonus. Some lenders also accept gifted deposits from family members, though they'll want documentation confirming the gift doesn't need to be repaid.",
        ],
      },
      {
        heading: "Government Support Schemes",
        paragraphs: [
          "Several schemes exist to help first time buyers. Shared Ownership lets you buy a share of a property (25-75%) and pay rent on the remainder. The First Homes scheme offers new builds at significant discounts. Lifetime ISAs provide a 25% bonus on savings up to £4,000 annually for first-time purchases.",
          "Each scheme has eligibility criteria and limitations. Our advisors can explain which schemes you might qualify for and how they work alongside a mortgage.",
        ],
      },
      {
        heading: "Choosing Your First Mortgage",
        paragraphs: [
          "Most first time buyers choose fixed rate mortgages for payment certainty during their early years of homeownership. Two-year fixes are popular for those who might want flexibility soon, while five-year fixes offer longer-term stability. Consider what matters most to you - low initial payments, payment certainty, or flexibility.",
          "Remember that your first mortgage isn't forever. When your initial deal ends (typically after 2-5 years), you'll have the opportunity to remortgage to a new deal based on your circumstances at that time.",
        ],
      },
    ],
    relatedPages: ["home-movers", "key-workers", "contractors"],
  },
  {
    slug: "over-60s",
    title: "Mortgages for Over 60s",
    metaTitle: "Mortgages for Over 60s - Retirement Options | Remortgage Advisor",
    metaDescription: "Mortgage options for over 60s including retirement interest only and equity release alternatives. Find lenders with no maximum age limits.",
    heroTitle: "Mortgages for Over 60s",
    heroDescription: "Age shouldn't limit your mortgage options. Discover flexible lending solutions designed for borrowers approaching or in retirement.",
    content: [
      {
        heading: "Mortgage Options in Later Life",
        paragraphs: [
          "Getting a mortgage in your 60s and beyond is absolutely possible, though options differ from standard lending. Many lenders have maximum age limits at the end of the mortgage term, but others are more flexible, some with no upper age limit at all. For those looking to remortgage in later life, understanding your options helps you make informed decisions about your property and finances.",
          "Your options may include standard residential mortgages with lenders who accept older borrowers, Retirement Interest Only (RIO) mortgages, or equity release products. The best choice depends on your income in retirement, your long-term plans, and what you want to achieve.",
        ],
      },
      {
        heading: "Retirement Interest Only Mortgages",
        paragraphs: [
          "RIO mortgages are specifically designed for older borrowers. Like traditional interest only, you pay only the interest each month - the loan is repaid when you sell the property, move into care, or pass away. The key difference is that affordability is assessed on your retirement income rather than requiring a separate repayment vehicle.",
          "RIO mortgages can be useful for those who want lower monthly payments or need to remortgage an existing interest only mortgage that's reaching term. They provide a way to stay in your home while managing costs in retirement.",
        ],
      },
      {
        heading: "Lenders Without Maximum Age Limits",
        paragraphs: [
          "Several lenders have removed or increased maximum age limits, recognising that people are working and staying active for longer. Building societies often lead in this area - Family Building Society, Bath Building Society, and others have been notably flexible on age criteria.",
          "When assessing applications from older borrowers, lenders focus on sustainable retirement income. Pensions (state and private), investment income, rental income, and even part-time employment income can all contribute to affordability calculations.",
        ],
      },
      {
        heading: "Equity Release Alternatives",
        paragraphs: [
          "Equity release allows you to access the value in your home without monthly payments. The loan, plus rolled-up interest, is repaid when you die or move into care. While this provides tax-free cash without impacting current income, it reduces what you leave to beneficiaries and can be expensive over time due to compound interest.",
          "A RIO mortgage or standard mortgage may be more cost-effective if you can afford monthly payments. Our advisors can compare the options and help you understand the long-term cost implications of each approach.",
        ],
      },
    ],
    relatedPages: ["remortgaging", "landlords", "home-movers"],
  },
  {
    slug: "bad-credit",
    title: "Mortgages for Bad Credit",
    metaTitle: "Mortgages for Bad Credit - Can You Get Approved? | Remortgage Advisor",
    metaDescription: "Bad credit mortgage advice for CCJs, defaults, missed payments and more. Compare specialist lenders and understand your options.",
    heroTitle: "Mortgages for Bad Credit",
    heroDescription: "Past credit problems don't have to mean mortgage rejection. Specialist lenders consider the full picture.",
    content: [
      {
        heading: "Getting a Mortgage with Credit Issues",
        paragraphs: [
          "Having bad credit doesn't automatically mean you can't get a mortgage. While some lenders will decline applications with adverse credit, others specialise in helping borrowers with imperfect histories. Whether you're remortgaging to escape a high SVR or looking to purchase, there are options available - though rates will typically be higher than standard products.",
          "The severity and recency of credit issues affects your options. A satisfied CCJ from years ago is viewed very differently to an active default. Lenders also consider how your credit behaviour has improved since any problems occurred.",
        ],
      },
      {
        heading: "Types of Credit Issues Lenders Consider",
        paragraphs: [
          "Bad credit encompasses various issues: missed payments on credit commitments, defaults, CCJs, IVAs, debt management plans, bankruptcy, and repossessions. Each lender has different tolerance levels - some accept satisfied CCJs under certain amounts, others will consider defaults if they're old enough.",
          "The key information lenders look at includes: when the issue occurred, whether it's satisfied or ongoing, the amount involved, and how you've managed credit since. More recent or larger issues are viewed more seriously, while older, smaller problems that have been resolved are often more acceptable.",
        ],
      },
      {
        heading: "Specialist Bad Credit Lenders",
        paragraphs: [
          "Lenders like Kensington, Pepper Money, Precise Mortgages, and Bluestone specialise in adverse credit lending. They manually underwrite applications, assessing your circumstances rather than just running automated credit scores. This means they can consider explanations for past problems and evidence of improved financial behaviour.",
          "These lenders typically charge higher rates than mainstream products, reflecting the additional risk they take. However, securing a specialist mortgage can be a stepping stone - as your credit improves over time, you can remortgage to better rates.",
        ],
      },
      {
        heading: "Improving Your Approval Chances",
        paragraphs: [
          "A larger deposit helps offset credit concerns - higher equity means lower risk for lenders. Demonstrating current financial stability through steady income, manageable debts, and recent positive credit behaviour also strengthens applications.",
          "Working with a broker who understands the adverse credit market is valuable. We know which lenders accept which types of credit issues and can match your application to appropriate lenders, avoiding unnecessary declines that could further impact your credit file.",
        ],
      },
    ],
    relatedPages: ["self-employed", "remortgaging", "landlords"],
  },
  {
    slug: "landlords",
    title: "Mortgages for Landlords",
    metaTitle: "Mortgages for Landlords - BTL Deals | Remortgage Advisor",
    metaDescription: "Buy to let mortgage advice for landlords. Compare BTL rates for single properties, portfolios and limited company purchases.",
    heroTitle: "Mortgages for Landlords",
    heroDescription: "Whether you own one rental or a large portfolio, we can help you find competitive buy to let financing.",
    content: [
      {
        heading: "Buy to Let Mortgage Essentials",
        paragraphs: [
          "Landlords need specialist buy to let mortgages for investment properties. These differ from residential mortgages in several ways: rates are typically higher, minimum deposits are usually 25%, and affordability is primarily based on rental income rather than personal earnings. If you're a landlord looking to remortgage your BTL properties, comparing deals regularly ensures you're not overpaying.",
          "Whether you're a first-time landlord or an experienced investor, understanding the BTL market helps you make informed financing decisions. The right mortgage can significantly impact your rental yield and overall investment return.",
        ],
      },
      {
        heading: "Rental Coverage Requirements",
        paragraphs: [
          "Lenders calculate rental coverage ratios to ensure rent adequately covers mortgage payments. Most require rent to be 125-145% of the monthly payment at a stressed interest rate (typically 5.5% or higher). Higher-rate taxpayers often face stricter 145% requirements due to Section 24 tax implications.",
          "If your rental income doesn't meet standard coverage requirements, some lenders offer top-slicing - using your personal income to supplement rental calculations. This can help properties that are slightly under the required coverage ratios.",
        ],
      },
      {
        heading: "Portfolio Landlord Considerations",
        paragraphs: [
          "Owning four or more mortgaged properties classifies you as a portfolio landlord under PRA rules. This triggers additional underwriting requirements - lenders must assess your entire portfolio, not just the property you're financing. You'll need to provide details of all properties, their values, mortgages, and rental incomes.",
          "Some lenders specialise in portfolio landlords and offer streamlined processes for experienced investors. Others avoid portfolio cases entirely. Our brokers know which lenders are portfolio-friendly and can navigate the additional documentation requirements efficiently.",
        ],
      },
      {
        heading: "Personal vs Limited Company",
        paragraphs: [
          "Tax changes have made limited company ownership more attractive for many landlords, particularly higher-rate taxpayers who've lost mortgage interest relief on personal holdings. Companies can still deduct mortgage interest as an expense, potentially reducing tax liability significantly.",
          "The decision between personal and company ownership involves complex tax considerations. While we can compare mortgage options for both structures, we'd recommend consulting an accountant to determine which is most tax-efficient for your circumstances.",
        ],
      },
    ],
    relatedPages: ["self-employed", "bad-credit", "remortgaging"],
  },
  {
    slug: "home-movers",
    title: "Mortgages for Home Movers",
    metaTitle: "Mortgages for Home Movers - Compare Deals | Remortgage Advisor",
    metaDescription: "Moving home? Compare mortgage options including porting your existing deal or securing a new mortgage. Get expert advice on the best approach.",
    heroTitle: "Mortgages for Home Movers",
    heroDescription: "Moving to your next home? Compare your options for porting your mortgage or finding a better deal.",
    content: [
      {
        heading: "Mortgage Options When Moving",
        paragraphs: [
          "Moving home presents mortgage decisions beyond just finding a new property. You may be able to port your existing mortgage, taking your current deal to your new home. Alternatively, you might pay off your current mortgage and take out a completely new one. Each approach has implications for costs, rates, and flexibility.",
          "The best option depends on your current mortgage terms, the size of mortgage you need for your new home, and what deals are available in the current market. Calculating the true cost of each approach helps you make an informed decision.",
        ],
      },
      {
        heading: "Porting Your Existing Mortgage",
        paragraphs: [
          "Porting allows you to transfer your current rate to a new property, potentially avoiding early repayment charges. However, porting isn't guaranteed - you must reapply and meet your lender's current criteria, and your new property must be acceptable to them. The process is essentially a new application using your existing rate.",
          "If you're borrowing more than your current mortgage balance, you may be able to port and borrow additional funds on a new rate alongside. This creates a split mortgage with potentially different rates and terms on each part.",
        ],
      },
      {
        heading: "When to Get a New Mortgage",
        paragraphs: [
          "Sometimes starting fresh with a new mortgage makes more financial sense. If your current rate is no longer competitive, or if early repayment charges are low or nil, a new deal could save you money overall. Calculate whether any exit fees are offset by savings from better rates.",
          "A new mortgage means a fresh application, but this can be advantageous if your circumstances have improved - increased income, better credit, or more equity from house price growth could unlock better rates than before.",
        ],
      },
      {
        heading: "Expert Home Mover Advice",
        paragraphs: [
          "Our brokers can calculate the true cost of porting versus switching for your specific situation. We'll consider your current rate, any early repayment charges, new deal options, and all associated fees to recommend the most cost-effective approach. Complete our form for personalised advice on your move.",
        ],
      },
    ],
    relatedPages: ["first-time-buyers", "remortgaging", "over-60s"],
  },
  {
    slug: "remortgaging",
    title: "Mortgages for Remortgaging",
    metaTitle: "Mortgages for Remortgaging - Compare Deals | Remortgage Advisor",
    metaDescription: "Compare remortgage deals from 100+ UK lenders. Find out when to remortgage, how much you could save and get free expert advice.",
    heroTitle: "Mortgages for Remortgaging",
    heroDescription: "Don't overpay on your mortgage. Compare remortgage deals and see how much you could save by switching.",
    content: [
      {
        heading: "Why Consider Remortgaging?",
        paragraphs: [
          "Remortgaging - switching your mortgage to a new deal - is one of the most effective ways to save money on your biggest financial commitment. When your initial fixed or tracker rate ends, you typically move to your lender's Standard Variable Rate (SVR), which is usually significantly higher than competitive new deals.",
          "Beyond saving money on your rate, remortgaging can also help you release equity for home improvements, consolidate other debts, or change your mortgage terms. Whatever your reason, comparing options regularly ensures you're getting value from your mortgage.",
        ],
      },
      {
        heading: "When Should You Remortgage?",
        paragraphs: [
          "Start looking for a new deal around 6 months before your current rate ends. Most mortgage offers are valid for 3-6 months, so you can secure a rate early and let it start when needed. This gives time to complete the process without risking time on the expensive SVR.",
          "If you're already on your SVR, consider remortgaging immediately - every month on a higher rate costs you money. There's no need to wait for a specific anniversary or date to switch.",
        ],
      },
      {
        heading: "The Remortgage Process",
        paragraphs: [
          "Remortgaging is straightforward, especially with broker assistance. We search for the best deals, submit your application with all required documents, and coordinate with the new lender and solicitors throughout. Many remortgage products include free valuations and legal services, reducing your costs.",
          "The process typically takes 4-8 weeks from application to completion. You'll need proof of income, bank statements, ID verification, and information about your property and current mortgage. We guide you through exactly what's needed.",
        ],
      },
      {
        heading: "How Much Could You Save?",
        paragraphs: [
          "Savings depend on your current rate versus available deals. Someone on a 7% SVR switching to a 4.5% rate on a £250,000 mortgage could save over £500 monthly. Even smaller improvements make meaningful differences over a mortgage term.",
          "Complete our form for a free, personalised remortgage quote. We'll show you the best available deals from over 100 lenders and calculate exactly how much you could save by switching.",
        ],
      },
    ],
    relatedPages: ["home-movers", "bad-credit", "self-employed"],
  },
  {
    slug: "key-workers",
    title: "Mortgages for Key Workers",
    metaTitle: "Mortgages for Key Workers - NHS, Teachers, Police | Remortgage Advisor",
    metaDescription: "Mortgage options for key workers including NHS staff, teachers and police officers. Some lenders offer enhanced terms for essential workers.",
    heroTitle: "Mortgages for Key Workers",
    heroDescription: "Dedicated mortgage options for NHS staff, teachers, police, and other essential workers who keep the country running.",
    content: [
      {
        heading: "Key Worker Mortgage Benefits",
        paragraphs: [
          "Some lenders recognise the stability and importance of key worker employment, offering enhanced mortgage terms for NHS staff, teachers, police officers, firefighters, and other essential public service employees. These benefits might include preferential rates, higher income multiples, or more flexible criteria. If you're a key worker looking to remortgage, it's worth exploring whether your profession unlocks special products.",
          "Key worker status demonstrates stable employment in essential services, which some lenders view favourably. Even where specific key worker products aren't available, the job security associated with these professions can help with mortgage applications.",
        ],
      },
      {
        heading: "NHS and Healthcare Workers",
        paragraphs: [
          "NHS employees benefit from secure employment and regular income, making them attractive to mortgage lenders. Some products specifically target NHS staff, while others offer general benefits to public sector employees. Income structures including basic salary, enhancements, and overtime are often fully considered by lenders experienced with NHS pay.",
          "Healthcare professionals in private practice or agency work may need specialist lenders who understand variable income patterns. Our brokers know which lenders work best with different healthcare employment structures.",
        ],
      },
      {
        heading: "Teachers and Education Staff",
        paragraphs: [
          "Teachers benefit from stable employment and predictable pay scales. The Teachers Building Society, unsurprisingly, specialises in mortgages for education professionals, though many mainstream lenders also serve teachers well. Academy trust and private school staff typically have similar access to mortgage products.",
          "Supply teachers and those on fixed-term contracts may need more careful lender selection, as some require permanent contracts. We can identify lenders with flexible criteria for your employment situation.",
        ],
      },
      {
        heading: "Emergency Services Personnel",
        paragraphs: [
          "Police officers, firefighters, paramedics, and other emergency service workers often benefit from stable employment terms and pension arrangements. Some lenders view emergency services employment particularly favourably, while others may have specific products or criteria benefits.",
          "Our brokers can search for the best deals across the market, identifying any key worker benefits applicable to your profession and ensuring you're getting the best possible terms for your circumstances.",
        ],
      },
    ],
    relatedPages: ["first-time-buyers", "home-movers", "remortgaging"],
  },
  {
    slug: "contractors",
    title: "Mortgages for Contractors",
    metaTitle: "Mortgages for Contractors - Day Rate Calculations | Remortgage Advisor",
    metaDescription: "Contractor mortgage advice for IT, engineering and professional contractors. Understand day rate calculations and IR35 implications.",
    heroTitle: "Mortgages for Contractors",
    heroDescription: "Working as a contractor? Specialist lenders can calculate affordability based on your day rate, not just dividends.",
    content: [
      {
        heading: "Contractor Mortgage Options",
        paragraphs: [
          "Contractors often find standard mortgage assessments don't reflect their true earning capacity. Taking a modest salary and dividends for tax efficiency can make company accounts look less impressive than your actual earning power. Specialist contractor mortgages address this by calculating affordability based on your daily rate and remaining contract length rather than accounts alone.",
          "Whether you're remortgaging your home or purchasing a new property, contractor-specific products can significantly increase your borrowing capacity compared to standard self-employed assessments.",
        ],
      },
      {
        heading: "Day Rate Calculations",
        paragraphs: [
          "Specialist contractor lenders multiply your day rate by a standard number of working days (typically 46-48 weeks allowing for holidays) to calculate annual income. For example, a contractor earning £500 per day would be assessed on approximately £115,000-£120,000 annually, regardless of what their company accounts show.",
          "Requirements typically include a minimum day rate (often £400+), minimum remaining contract length (usually 6-12 months), and evidence of contracting history (usually 12 months minimum). Some lenders also require that contracting is your primary occupation.",
        ],
      },
      {
        heading: "IR35 Considerations",
        paragraphs: [
          "IR35 status affects your tax position but doesn't necessarily prevent mortgage access. Contractors working inside IR35 through umbrella companies have PAYE income, making standard employed criteria applicable. Those outside IR35 operating through personal service companies typically need day rate or contractor-specific assessment.",
          "Some lenders are cautious about IR35 complexities, while others have developed expertise in contractor income assessment regardless of IR35 status. Our brokers can navigate these nuances and match you with appropriate lenders.",
        ],
      },
      {
        heading: "Which Lenders Accept Contractors?",
        paragraphs: [
          "Several lenders have contractor-friendly products, including Kensington, Accord, Halifax, and others. Each has different minimum requirements for day rate, contract length, and contracting history. Some building societies also offer flexible assessment for contractors.",
          "Working with a broker experienced in contractor mortgages saves time and ensures your application goes to lenders most likely to approve based on your specific circumstances. Complete our form for free, personalised contractor mortgage advice.",
        ],
      },
    ],
    relatedPages: ["self-employed", "bad-credit", "remortgaging"],
  },
];

export function getMortgagesForBySlug(slug: string): MortgagesFor | undefined {
  return mortgagesFor.find((item) => item.slug === slug);
}

export function getAllMortgagesForSlugs(): string[] {
  return mortgagesFor.map((item) => item.slug);
}
