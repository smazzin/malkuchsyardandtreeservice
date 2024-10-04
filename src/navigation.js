import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Tree Removal',
          href: getPermalink('/roof-replacement'),
        },
        {
          text: 'Tree Trimming & Pruning',
          href: getPermalink('/residential-roofing'),
        },
        {
          text: 'Stump Grinding',
          href: getPermalink('/commercial-roofing'),
        },
        {
          text: 'Tree Cabling & Bracing',
          href: getPermalink('/metal-roofing'),
        },
        {
          text: 'Tree Health & Insect Control Treatments',
          href: getPermalink('/roof-repair'),
        },
      ],
    },
    {
      text: 'Areas We Serve',
      links: [
        {
          text: 'Roseburg, OR',
          href: getPermalink('/service-areas/roofing-jupiter-fl'),
        },
        {
          text: 'Glide, OR',
          href: getPermalink('/service-areas/roofing-ft-lauderdale-fl'),
        },
        {
          text: 'Sutherlin, OR',
          href: getPermalink('/service-areas/roofing-hobe-sound-fl'),
        },
        {
          text: 'Winston, OR',
          href: getPermalink('/service-areas/roofing-port-st-lucie-fl'),
        },
        {
          text: 'Green, OR',
          href: getPermalink('/service-areas/roofing-palm-beach-gardens-fl'),
        },
      ],
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    }
  ],
  actions: [
    {
      text: 'Get a FREE Estimate', href: 'request-a-free-roofing-estimate', class: 'outline', target: '_self'
    },
  ],
  actionsAlt: [
    {
      text: 'Call Us (561) 719-1208', href: 'tel:561-719-1208', target: '_self'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Residential Roofing', href: '/residential-roofing' },
        { text: 'Commercial Roofing', href: '/commercial-roofing' },
        { text: 'Metal Roofing', href: '/metal-roofing' },
        { text: 'Roof Repair', href: '/roof-repair' },
        { text: 'Roof Replacement', href: '/roof-replacement' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Jupiter, FL', href: '#' },
        { text: '(561) 719-1208', href: 'tel:561-719-1208' },
        { text: 'info@rareymannroofing.com', href: 'mailto:info@rareymannroofing.com' },
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    //{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://digitalcloudnw.com/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://digitalcloudnw.com/"> Digital Cloud</a> · All rights reserved.
  `,
};
