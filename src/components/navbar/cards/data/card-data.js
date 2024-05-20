export const navItems = [
  {
    key: "services",
    title: "Services",
    categories: {
      html: `
        <div class="flex w-full">
          <div class=" h-fit w-[25%]">
            <div class="h-fit">
              <h2 class="mb-1 text-lg font-semibold">Mobile App</h2>
              <ul class=" text-sm xl:text-base border-l-2 border-blue-600 flex flex-col gap-1 ml-1 pl-3 pb-2">
                <li class="hover:underline cursor-pointer">Android App Development</li>
                <li class="hover:underline cursor-pointer">iPhone App Development</li>
                <li class="hover:underline cursor-pointer">iPad App Development</li>
                <li class="hover:underline cursor-pointer">Mobile App Development</li>
              </ul>
            </div>
            <div class="h-fit">
              <h2 class=" mb-1 text-lg font-semibold">UI/UX Design</h2>
              <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                <li class="hover:underline cursor-pointer">UI & UX Designing</li>
                <li class="hover:underline cursor-pointer">Android UX-UI Development</li>
                <li class="hover:underline cursor-pointer">iPhone UX-UI Development</li>
                <li class="hover:underline cursor-pointer">iPad UX/UI Development</li>
              </ul>
            </div>
            <div class="h-fit">
              <h2 class=" mb-1 text-lg font-semibold">Cross-platform</h2>
              <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                <li class="hover:underline cursor-pointer">Cross Platform Development</li>
                <li class="hover:underline cursor-pointer">React Native Development</li>
                <li class="hover:underline cursor-pointer">Hybrid App Development</li>
                <li class="hover:underline cursor-pointer">Flutter App Development</li>
                <li class="hover:underline cursor-pointer">Kotlin App Development</li>
                <li class="hover:underline cursor-pointer">PhoneGap Development</li>
                <li class="hover:underline cursor-pointer">Xamarin App Development</li>
                <li class="hover:underline cursor-pointer">Sencha App Development</li>
              </ul>
            </div>
            <div class="h-fit ">
              <h2 class=" mb-1 text-lg font-semibold">Testing Company</h2>
              <ul class=" flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                <li class="hover:underline cursor-pointer">Penetration Testing</li>
                <li class="hover:underline cursor-pointer">VAP Testing Services</li>
              </ul>
            </div>
          </div>

          <div class="h-fit w-[25%]">
            <div class=" h-fit">
                <h2 class="mb-1 text-lg font-semibold">Web Application</h2>
                <ul class=" flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">Frontend Designing</li>
                    <li class="hover:underline cursor-pointer">Web App Development</li>
                    <li class="hover:underline cursor-pointer">JAVA Application Development</li>
                    <li class="hover:underline cursor-pointer">React JS Development</li>
                    <li class="hover:underline cursor-pointer">Angular JS Development</li>
                    <li class="hover:underline cursor-pointer">Ruby On Rails Development</li>
                    <li class="hover:underline cursor-pointer">HTML5/CSS Designing</li>
                    <li class="hover:underline cursor-pointer">Responsive Web Designing</li>
                </ul>
            </div>
            <div class=" h-fit">
                <h2 class="mb-1 text-lg font-semibold">BackEnd</h2>
                <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">PHP Application Development</li>
                    <li class="hover:underline cursor-pointer">Node JS Development</li>
                    <li class="hover:underline cursor-pointer">Python Development</li>
                    <li class="hover:underline cursor-pointer">Django Development</li>
                    <li class="hover:underline cursor-pointer">WordPress Development</li>
                    <li class="hover:underline cursor-pointer">Moodle Development</li>
                </ul>
            </div>
            <div class=" h-fit">
              <h2 class="mb-1 text-lg font-semibold">Framework Development</h2>
              <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                  <li class="hover:underline cursor-pointer">Framework Development</li>
                  <li class="hover:underline cursor-pointer">Laravel Development</li>
                  <li class="hover:underline cursor-pointer">Zend Development</li>
                  <li class="hover:underline cursor-pointer">CakePHP Development</li>
                  <li class="hover:underline cursor-pointer">Symfony Development</li>
                  <li class="hover:underline cursor-pointer">Yii Development</li>
                  <li class="hover:underline cursor-pointer">CodeIgniter Development</li>
              </ul>
            </div>
          </div>
          <div class="h-fit w-[25%] ">
            <div class="h-fit">
              <h2 class="mb-1 text-lg font-semibold">AWS Services</h2>
              <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                  <li class="hover:underline cursor-pointer">AWS MediaLive</li>
                  <li class="hover:underline cursor-pointer">AWS CloudFront</li>
                  <li class="hover:underline cursor-pointer">AWS Media Convert</li>
                  <li class="hover:underline cursor-pointer">AWS Kendra</li>
                  <li class="hover:underline cursor-pointer">Amazon LEX</li>
                  <li class="hover:underline cursor-pointer">AWS Quicksight</li>
                  <li class="hover:underline cursor-pointer">AWS Development Partner</li>
                  <li class="hover:underline cursor-pointer">AWS Live Classes Solution</li>
                  <li class="hover:underline cursor-pointer">AWS Elemental Live L812AE</li>
                  <li class="hover:underline cursor-pointer">AWS Education Competency</li>
                  <li class="hover:underline cursor-pointer">Amazon Pinpoint Services</li>
                  <li class="hover:underline cursor-pointer">AWS Migration Services</li>
                  <li class="hover:underline cursor-pointer">AWS Well-Architected Review</li>
                  <li class="hover:underline cursor-pointer">Discounted AWS Billing for VISA</li>
                  <li class="hover:underline cursor-pointer">AWS Discounted Billing</li>
                  <li class="hover:underline cursor-pointer">Discounted AWS Billing for VISA USA</li>
              </ul>
            </div>
            <div class="h-fit">
                <h2 class="mb-1 text-lg font-semibold">Ecommerce & CMS</h2>
                <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">Ecommerce & CMS</li>
                    <li class="hover:underline cursor-pointer">Magento Development</li>
                    <li class="hover:underline cursor-pointer">Shopify Development</li>
                    <li class="hover:underline cursor-pointer">OpenCart Development</li>
                    <li class="hover:underline cursor-pointer">PrestaShop Development</li>
                    <li class="hover:underline cursor-pointer">WooCommerce Development</li>
                    <li class="hover:underline cursor-pointer">OsCommerce Development</li>
                    <li class="hover:underline cursor-pointer">Ubercart Development</li>
                </ul>
            </div>
          </div>
          <div class="h-fit w-[25%]">
            <div class="flex flex-col gap-1 h-fit">
              <h2 class="mb-1 text-lg font-semibold">Emerging Technologies</h2>
              <ul class=" text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                  <li class="hover:underline cursor-pointer">AI Chatbot Development</li>
                  <li class="hover:underline cursor-pointer">AR/VR Development</li>
                  <li class="hover:underline cursor-pointer">Blockchain Development</li>
                  <li class="hover:underline cursor-pointer">Cloud Computing</li>
                  <li class="hover:underline cursor-pointer">Encrypted Video Streaming</li>
                  <li class="hover:underline cursor-pointer">iBeacon App Development</li>
                  <li class="hover:underline cursor-pointer">IoT Development</li>
                  <li class="hover:underline cursor-pointer">iWatch App Development</li>
                  <li class="hover:underline cursor-pointer">Wearable App Development</li>
              </ul>
            </div>
            <div class="h-fit">
                <h2 class="mb-1 text-lg font-semibold">Digital Marketing Services</h2>
                <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">Search Engine Optimization (SEO)</li>
                    <li class="hover:underline cursor-pointer">PPC Management Services</li>
                    <li class="hover:underline cursor-pointer">Social Media Marketing</li>
                    <li class="hover:underline cursor-pointer">Content Marketing Services</li>
                    <li class="hover:underline cursor-pointer">Brand Reputation Management</li>
                </ul>
            </div>
             <div class="h-fit">
                <h2 class="mb-1 text-lg font-semibold">Microsoft Technology</h2>
                <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">Microsoft Technologies</li>
                    <li class="hover:underline cursor-pointer">.Net Development</li>
                    <li class="hover:underline cursor-pointer">C# Development</li>
                    <li class="hover:underline cursor-pointer">Sharepoint Development</li>
                </ul>
            </div>
            <div class="h-fit">
                <h2 class="mb-1 text-lg font-semibold">Game Development</h2>
                <ul class="flex flex-col gap-1 text-sm xl:text-base border-l-2 border-blue-600 ml-1 pl-3 pb-2">
                    <li class="hover:underline cursor-pointer">Android Game Development</li>
                    <li class="hover:underline cursor-pointer">iPhone Game Development</li>
                    <li class="hover:underline cursor-pointer">iPad Game Development</li>
                </ul>
            </div>
          </div>
        </div>
        `,
    },
  },

  {
    key: "about",
    title: "about",
    categories: {
      html : `Nothing...`
    }
  },

  {
    key: "career",
    title: "career",
    categories: {
      html : `Nothing...`
    }
  },
  // Define other nav items (about, career, etc.) similarly if needed
];
