export interface LenderContent {
  paragraphs: string[];
  testimonials: { quote: string; author: string }[];
}

export const lenderContent: Record<string, LenderContent> = {
  barclays: {
    paragraphs: [
      "Barclays is one of the UK's largest and most established banking institutions, with a mortgage lending heritage spanning over a century. As a major high street lender, they offer a comprehensive range of residential mortgages including fixed rates, trackers, and flexible products. Their remortgage deals are particularly competitive for borrowers with good credit and reasonable loan-to-value ratios, often featuring cashback offers and fee-free options.",
      "For those considering remortgaging with Barclays, the bank is known for its straightforward online application process and dedicated mortgage advisers available in branches nationwide. They're particularly strong for conventional residential lending and have developed efficient systems for processing remortgage applications quickly. Barclays also offers green mortgage products with preferential rates for energy-efficient homes.",
      "Barclays mortgages tend to suit employed borrowers with straightforward income documentation. They're competitive for standard residential properties and offer good rates across various LTV bands. If you're self-employed or have complex income, specialist lenders may offer more flexibility, but for mainstream borrowing Barclays remains a strong choice. Compare their latest rates through our service to see how they stack up against the wider market.",
    ],
    testimonials: [
      { quote: "The remortgage process with Barclays was smooth. Our advisor explained everything and we completed within 6 weeks.", author: "James T., Manchester" },
      { quote: "Saved over £200 a month by switching to Barclays. Their online tracking kept us updated throughout.", author: "Sarah M., Bristol" },
    ],
  },
  hsbc: {
    paragraphs: [
      "HSBC UK is a global banking giant with significant presence in the UK mortgage market. Their mortgage products are known for competitive rates, particularly for borrowers with larger deposits or existing HSBC banking relationships. HSBC Premier and Advance customers may qualify for preferential rates and enhanced income multiples, making them attractive for higher earners looking to remortgage.",
      "The bank has invested heavily in digital mortgage services, offering a streamlined online application process alongside traditional branch-based advice. For remortgage customers, HSBC often provides free valuations and legal services on many products, reducing the overall cost of switching. They're also one of the more flexible high street lenders for self-employed borrowers.",
      "HSBC suits borrowers seeking competitive mainstream rates with the backing of a major international bank. They're particularly competitive in the lower LTV brackets (60-75% LTV) and offer good terms for professional customers. Their international banking expertise also makes them a choice for borrowers with overseas income or complex global financial arrangements.",
    ],
    testimonials: [
      { quote: "As an HSBC Premier customer, we got an excellent rate and the whole process was handled professionally.", author: "Michael R., London" },
      { quote: "The online application was straightforward and we received a decision within 48 hours.", author: "Emma L., Edinburgh" },
    ],
  },
  nationwide: {
    paragraphs: [
      "Nationwide Building Society is the UK's largest building society and a major mortgage lender with a reputation for customer service excellence. As a mutual organisation owned by its members, Nationwide often leads on competitive rates while maintaining a commitment to treating customers fairly. Their remortgage products frequently feature among the best-buy tables.",
      "For remortgage customers, Nationwide offers a particularly smooth switching process with dedicated support teams. They're known for retaining existing customers with competitive product transfer rates, meaning you may not even need to fully remortgage - a product switch could give you access to good rates with minimal paperwork. Their branch network also provides accessible face-to-face advice.",
      "Nationwide suits a wide range of borrowers from first-time buyers to experienced homeowners. They've been innovative in areas like higher LTV lending and helping those with smaller deposits. For remortgaging, their combination of competitive rates, trusted brand, and mutual ethos makes them a popular choice. Compare their current rates to see if they're right for your remortgage.",
    ],
    testimonials: [
      { quote: "Nationwide made our remortgage easy. The product transfer process was simple and we kept our loyalty discount.", author: "David W., Birmingham" },
      { quote: "Great customer service throughout. Our case handler was always available to answer questions.", author: "Lucy K., Leeds" },
    ],
  },
  natwest: {
    paragraphs: [
      "NatWest is one of the UK's major high street banks, offering a full range of mortgage products for purchases and remortgages. Part of the NatWest Group (which also includes RBS and Ulster Bank), they leverage significant scale to offer competitive rates across various product types. Their digital mortgage platform has been significantly upgraded, making applications more efficient.",
      "For remortgage borrowers, NatWest provides strong support through their branch network and telephone service. They often offer cashback deals and fee-free products that can reduce the overall cost of switching. NatWest has also developed specialist products for green homes and first-time buyers, demonstrating flexibility in their lending approach.",
      "NatWest suits mainstream borrowers looking for a trusted high street name with competitive rates. They're particularly good for those who value accessible support and straightforward products. While they may not be the most flexible for complex cases, their mainstream remortgage offerings are consistently competitive and worth comparing when searching for your next deal.",
    ],
    testimonials: [
      { quote: "Switched from our existing deal with NatWest - the process was seamless and we got a great fixed rate.", author: "Chris P., Glasgow" },
      { quote: "Excellent rate and the £500 cashback covered our costs. Very happy with NatWest.", author: "Hannah J., Cardiff" },
    ],
  },
  santander: {
    paragraphs: [
      "Santander UK is a major mortgage lender known for consistently competitive rates and a strong digital presence. They've invested heavily in streamlining their mortgage process, resulting in faster decisions and completions. For remortgage customers, Santander often features in best-buy tables and offers attractive incentives including cashback and free valuations.",
      "The bank has developed particular expertise in helping existing customers switch to new deals through their product transfer process, which can be completed largely online. For new remortgage customers from other lenders, Santander provides dedicated switching support and typically covers legal fees and valuation costs on many products.",
      "Santander suits borrowers looking for competitive mainstream rates with efficient processing. They're strong across most LTV bands and offer good terms for both employed and self-employed borrowers. Their 123 World rewards scheme can also provide additional benefits for Santander banking customers. Compare their latest rates to see how they fit your remortgage needs.",
    ],
    testimonials: [
      { quote: "Santander offered the best rate we found and the whole process was completed in just 4 weeks.", author: "Tom B., Reading" },
      { quote: "Very efficient from application to completion. The online tracking was particularly useful.", author: "Rachel D., Nottingham" },
    ],
  },
  halifax: {
    paragraphs: [
      "Halifax is one of the UK's most recognised mortgage brands and a major lender within the Lloyds Banking Group. With roots as a building society, Halifax has maintained a strong focus on helping homeowners access competitive mortgage products. Their size means they can offer competitive rates while maintaining extensive branch coverage for those who prefer face-to-face advice.",
      "For remortgage customers, Halifax provides a range of fixed, tracker, and variable rate options. They're particularly known for their switcher service for existing customers, making it easy to move to a new deal before your current rate ends. New customers benefit from their free valuation and legal services on many products, reducing switching costs.",
      "Halifax suits a wide range of mainstream borrowers, from first-time buyers to experienced homeowners looking to remortgage. They've developed specialist products for various situations including high LTV lending and family deposit mortgages. Their scale and brand recognition provide reassurance, while their rates remain competitive against the wider market.",
    ],
    testimonials: [
      { quote: "Halifax made remortgaging so easy. The switcher service meant we secured a new rate in just a few clicks.", author: "Steve M., Sheffield" },
      { quote: "Great rate and excellent service. The branch staff were really helpful in explaining our options.", author: "Karen H., Liverpool" },
    ],
  },
  "lloyds-bank": {
    paragraphs: [
      "Lloyds Bank is one of Britain's oldest and most trusted banking names, with a mortgage lending operation that serves millions of customers. As part of Lloyds Banking Group (alongside Halifax and Scottish Widows), they benefit from significant scale while maintaining a distinct product range. Their mortgage offerings include fixed rates, trackers, and flexible products suited to various borrower needs.",
      "For those looking to remortgage, Lloyds offers competitive rates across different LTV bands with particular strength in the mid-range (60-80% LTV). Their existing customers can access product transfers to new deals with minimal hassle, while new customers benefit from their efficient switching service. Lloyds also offers green mortgage options for energy-efficient homes.",
      "Lloyds suits mainstream borrowers seeking a trusted high street lender with competitive rates. They're particularly good for those who value relationship banking and may benefit from mortgage offers linked to their current accounts. While specialist cases may find more flexibility elsewhere, Lloyds remains a strong choice for straightforward remortgages.",
    ],
    testimonials: [
      { quote: "As a long-standing Lloyds customer, the remortgage process was very smooth with preferential rates.", author: "Andrew F., Oxford" },
      { quote: "The team kept us informed throughout and we completed ahead of schedule.", author: "Jennifer S., Cambridge" },
    ],
  },
  tsb: {
    paragraphs: [
      "TSB is a UK retail bank that was re-established in 2013, combining modern digital banking with traditional branch-based service. Their mortgage products focus on providing competitive rates with straightforward terms, appealing to borrowers who value simplicity and transparency. TSB has built a reputation for fair dealing and customer-centric service.",
      "For remortgage customers, TSB offers a range of fixed rate products with competitive pricing, particularly in the mainstream LTV brackets. They provide free valuations and legal services on many products, helping reduce the cost of switching. Their application process combines online efficiency with accessible telephone and branch support.",
      "TSB suits borrowers looking for a bank that combines competitive rates with straightforward service. They're particularly good for those who want the reliability of a traditional bank without complexity. While they may not have the extensive product range of larger lenders, their core remortgage offerings are competitive and worth considering.",
    ],
    testimonials: [
      { quote: "TSB gave us a really competitive rate and the process was straightforward from start to finish.", author: "Daniel R., Newcastle" },
      { quote: "Appreciated the clear communication and no hidden fees. Would definitely use again.", author: "Sophie W., Plymouth" },
    ],
  },
  "virgin-money": {
    paragraphs: [
      "Virgin Money has established itself as a dynamic player in the UK mortgage market, combining competitive rates with the distinctive Virgin brand ethos of challenging conventions. Since merging with Clydesdale Bank, they've expanded their product range while maintaining their focus on customer experience and innovation in financial services.",
      "For remortgage borrowers, Virgin Money offers an attractive combination of competitive rates and modern digital services. Their online application and management tools make it easy to track your remortgage progress. They've also developed green mortgage products and offset mortgages for borrowers seeking more sophisticated options.",
      "Virgin Money suits borrowers who appreciate modern banking with competitive rates. They're particularly good for those comfortable with digital services and looking for a fresh alternative to traditional high street banks. Their mortgage products are competitive across mainstream categories and worth comparing when searching for your next deal.",
    ],
    testimonials: [
      { quote: "Virgin Money offered an excellent rate and their online portal made the whole process easy to follow.", author: "Mark T., Brighton" },
      { quote: "Great service from start to finish. The team were responsive and helpful.", author: "Claire B., Norwich" },
    ],
  },
  "skipton-building-society": {
    paragraphs: [
      "Skipton Building Society is one of the UK's largest building societies, known for innovative products and competitive rates. As a mutual organisation, they prioritise member interests and have built a reputation for helping borrowers in situations that some lenders find challenging. Their Track Record mortgage for renters with no traditional deposit gained significant attention.",
      "For remortgage customers, Skipton offers a range of fixed rate products with competitive pricing. They're particularly strong for self-employed borrowers and those with non-standard income situations. Their flexible approach to affordability assessment means they can often help where other lenders decline.",
      "Skipton suits borrowers who appreciate the building society ethos and may benefit from their more flexible underwriting approach. They're particularly good for self-employed applicants and those with complex income. While they may not always offer the absolute lowest rates, their willingness to look at the bigger picture makes them valuable for certain borrowers.",
    ],
    testimonials: [
      { quote: "As a self-employed contractor, Skipton understood my income situation where others didn't.", author: "Paul H., York" },
      { quote: "The personal service from Skipton was excellent. They treated us as individuals, not just numbers.", author: "Amanda C., Harrogate" },
    ],
  },
  "coventry-building-society": {
    paragraphs: [
      "Coventry Building Society is one of the UK's largest building societies, consistently featuring among the most competitive lenders for residential mortgages. Their mutual status allows them to focus on member value rather than shareholder returns, often translating into market-leading rates. They're known for straightforward products without complex fee structures.",
      "For remortgage borrowers, Coventry offers excellent rates particularly at lower LTV bands (60-75%). They provide efficient processing and good customer service, with a mix of online and telephone support. Their products typically include free standard valuations and may offer free legal services for remortgages.",
      "Coventry suits borrowers with good equity who want competitive rates from a trusted building society. They're particularly strong for straightforward residential remortgages and reward borrowers with lower LTVs. If you're looking for headline rates with minimal fuss, Coventry is definitely worth comparing.",
    ],
    testimonials: [
      { quote: "Coventry offered the best rate we could find and the process was smooth and efficient.", author: "Robert L., Coventry" },
      { quote: "Really impressed with Coventry. Great rate and excellent service throughout our remortgage.", author: "Michelle P., Leicester" },
    ],
  },
  "leeds-building-society": {
    paragraphs: [
      "Leeds Building Society is a major UK building society with a strong reputation for competitive mortgage products and customer service. They've developed expertise in several specialist areas including self-employed lending, later life mortgages, and shared ownership. Their mutual status means they can often be more flexible than shareholder-owned banks.",
      "For remortgage customers, Leeds offers competitive fixed rates and has developed particular expertise in helping borrowers with complex situations. They're known for manual underwriting that considers individual circumstances rather than rigid automated criteria. This makes them valuable for those who don't fit standard lending boxes.",
      "Leeds suits a range of borrowers, from those seeking competitive mainstream rates to those with more complex circumstances who need flexible assessment. They're particularly good for self-employed borrowers and older applicants. Their combination of competitive rates and understanding approach makes them worth considering.",
    ],
    testimonials: [
      { quote: "Leeds understood our self-employed situation and offered a great rate where others had struggled.", author: "Graham S., Leeds" },
      { quote: "The building society really took time to understand our needs. Excellent personal service.", author: "Linda M., Bradford" },
    ],
  },
  "yorkshire-building-society": {
    paragraphs: [
      "Yorkshire Building Society is one of the UK's largest building societies and a significant mortgage lender. Operating under the YBS brand alongside subsidiaries Accord Mortgages and Chelsea Building Society, they offer a wide range of products through both direct and intermediary channels. Their scale allows competitive pricing while their mutual status maintains customer focus.",
      "For remortgage borrowers, Yorkshire Building Society offers competitive fixed and variable rate products. They've developed strength in several specialist areas and often feature innovative products. Their Accord Mortgages subsidiary is particularly popular with brokers for its competitive rates and flexible approach.",
      "Yorkshire Building Society suits borrowers looking for competitive rates from a large, trusted building society. They're good for mainstream lending and have developed expertise in several specialist areas. Whether approaching directly or through Accord via a broker, they're worth including in your comparison.",
    ],
    testimonials: [
      { quote: "YBS offered an excellent rate and their branch staff were really helpful in explaining everything.", author: "Kevin D., Hull" },
      { quote: "Great experience remortgaging with Yorkshire BS. Efficient process and competitive rate.", author: "Susan T., Sheffield" },
    ],
  },
  "metro-bank": {
    paragraphs: [
      "Metro Bank brought a fresh approach to UK banking when it launched in 2010, with a focus on customer service and convenient branch hours. Their mortgage products reflect this ethos, offering straightforward terms with competitive rates. They've positioned themselves as an alternative to traditional high street banks for borrowers seeking a different banking experience.",
      "For remortgage customers, Metro Bank offers fixed rate products with simple terms. Their extended branch hours (including weekends) can be valuable for borrowers who need face-to-face support outside traditional banking hours. They also offer a streamlined application process with quick decisions.",
      "Metro Bank suits borrowers who value accessible customer service and appreciate a modern approach to banking. While they may not always have the absolute lowest rates, their service standards and convenient banking make them attractive for those who want more than just a competitive rate.",
    ],
    testimonials: [
      { quote: "Metro Bank's weekend hours meant I could discuss our remortgage when it suited us.", author: "Jason P., London" },
      { quote: "Really liked the service at Metro Bank. Felt like they actually wanted to help us.", author: "Nicola F., Croydon" },
    ],
  },
  kensington: {
    paragraphs: [
      "Kensington Mortgages is a specialist lender focused on helping borrowers who may not fit traditional lending criteria. They've built expertise in self-employed lending, complex income situations, and adverse credit mortgages. For those who've been declined by mainstream lenders, Kensington often provides a route to homeownership or remortgaging.",
      "For remortgage customers, Kensington manually underwrites each application, taking time to understand individual circumstances rather than relying solely on automated decisions. This approach means they can often help where others can't - whether that's due to credit issues, irregular income, or unusual property types.",
      "Kensington suits borrowers with complex situations who need a lender willing to look beyond the standard criteria. While rates are typically higher than mainstream lenders (reflecting the additional risk they accept), they provide valuable solutions for those who might otherwise be locked out of the mortgage market.",
    ],
    testimonials: [
      { quote: "After being turned down elsewhere, Kensington understood our situation and found a way to help.", author: "Martin K., Essex" },
      { quote: "The underwriting team really took time to understand our self-employed income. Grateful for their approach.", author: "Victoria R., Surrey" },
    ],
  },
  "pepper-money": {
    paragraphs: [
      "Pepper Money is a specialist lender that focuses on helping customers whose circumstances make mainstream lending challenging. They specialise in adverse credit lending, considering applications from borrowers with CCJs, defaults, missed payments, or previous bankruptcies. Their approach is designed to help people rebuild their credit journey through homeownership.",
      "For remortgage customers, Pepper Money offers a route to better rates for those improving from adverse credit positions. They take a pragmatic view of past credit problems, focusing on current circumstances and affordability. Many borrowers use Pepper as a stepping stone, remortgaging to mainstream lenders as their credit history improves.",
      "Pepper Money suits borrowers with credit challenges who need a specialist approach. While rates reflect the additional risk profile, they provide essential access to mortgage finance for those rebuilding their finances. If you've had credit difficulties, Pepper Money is worth considering as part of your return to mainstream lending.",
    ],
    testimonials: [
      { quote: "Pepper Money gave us a chance when others wouldn't look at us due to past credit issues.", author: "Steven H., Birmingham" },
      { quote: "Fair rates considering our history. Plan to remortgage to mainstream once our credit is rebuilt.", author: "Rebecca N., Manchester" },
    ],
  },
  "precise-mortgages": {
    paragraphs: [
      "Precise Mortgages is a specialist lender from the Charter Court Financial Services group, focusing on underserved segments of the mortgage market. They've developed particular expertise in self-employed lending, complex income situations, and buy-to-let mortgages for individual and portfolio landlords. Their approach combines specialist knowledge with efficient processing.",
      "For remortgage borrowers, Precise offers solutions where mainstream lenders' criteria don't fit. Their self-employed products can consider income in flexible ways, while their buy-to-let range caters to portfolio landlords and limited company purchases. They work exclusively through brokers, ensuring expert advice accompanies their specialist products.",
      "Precise suits borrowers with non-standard situations who need specialist underwriting. Self-employed borrowers, contractors, and landlords often find Precise more accommodating than mainstream alternatives. While rates may be higher than high street offerings, their flexibility can make the difference between approval and decline.",
    ],
    testimonials: [
      { quote: "As a contractor, Precise understood my day rate income where banks just saw low dividends.", author: "Chris L., Reading" },
      { quote: "Precise made our portfolio landlord remortgage straightforward. They understand the market.", author: "Ian B., Bristol" },
    ],
  },
  platform: {
    paragraphs: [
      "Platform is the intermediary-only brand of The Co-operative Bank, offering mortgage products through mortgage brokers rather than directly to consumers. They've built a reputation for competitive rates and efficient processing, with particular strength in the residential remortgage market. Their rates frequently feature in best-buy tables.",
      "For remortgage borrowers working through a broker, Platform offers attractive rates across various LTV bands. Their service standards are high, with good communication and efficient processing. The Co-operative Bank's ethical banking credentials also appeal to borrowers who consider corporate responsibility important.",
      "Platform suits borrowers who want competitive rates from a lender with strong ethical credentials. Working through a broker gives access to their products alongside the advice needed to navigate the application process. If you're comparing remortgage options through a broker, Platform should be on the list.",
    ],
    testimonials: [
      { quote: "Our broker recommended Platform and they offered an excellent rate with smooth processing.", author: "David M., Chester" },
      { quote: "Pleased with Platform. Competitive rate and liked that they're part of an ethical bank.", author: "Laura G., Derby" },
    ],
  },
  paragon: {
    paragraphs: [
      "Paragon Bank is a specialist lender with particular strength in buy-to-let mortgages. They've been lending to landlords since the 1980s and have developed deep expertise in this market. For professional landlords and portfolio investors, Paragon offers sophisticated products that understand the complexities of property investment.",
      "For buy-to-let remortgage customers, Paragon offers competitive rates for experienced landlords with proven track records. They're comfortable with portfolio applications and limited company structures, and have developed products specifically for HMO and multi-unit properties. Their underwriting considers rental yield alongside property value.",
      "Paragon suits experienced landlords seeking specialist buy-to-let lending. While they also offer residential mortgages, their real expertise lies in investment property finance. If you're a landlord looking to remortgage portfolio properties or expand your holdings, Paragon's specialist knowledge is valuable.",
    ],
    testimonials: [
      { quote: "Paragon understands landlords. Their approach to our portfolio application was professional and efficient.", author: "Roger T., London" },
      { quote: "Best experience we've had with BTL lending. Paragon knows this market inside out.", author: "Catherine H., Southampton" },
    ],
  },
  "kent-reliance": {
    paragraphs: [
      "Kent Reliance is part of the OneSavings Bank group and operates as a specialist buy-to-let and residential lender. Originally a building society, they've evolved into a specialist provider with particular expertise in buy-to-let lending, limited company mortgages, and complex residential cases. Their intermediary-only approach ensures broker expertise accompanies applications.",
      "For remortgage borrowers, Kent Reliance offers solutions for situations mainstream lenders may not accommodate. Their buy-to-let products cater to various landlord types including limited companies and portfolios. On the residential side, they can help with unusual property types or complex income situations.",
      "Kent Reliance suits borrowers who need specialist lending solutions. Whether you're a landlord looking to refinance through a limited company or a residential borrower with unusual circumstances, their flexible approach can help where mainstream lenders may struggle. Work with a broker to access their products.",
    ],
    testimonials: [
      { quote: "Kent Reliance handled our limited company BTL remortgage efficiently and offered competitive rates.", author: "Peter S., Kent" },
      { quote: "Their approach to unusual properties is refreshing. Got our remortgage approved on a property others wouldn't touch.", author: "Anne M., Sussex" },
    ],
  },
};

export function getLenderContentBySlug(slug: string): LenderContent | undefined {
  return lenderContent[slug];
}

export function hasDetailedContent(slug: string): boolean {
  return slug in lenderContent;
}
