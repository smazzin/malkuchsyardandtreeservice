import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Tree Removal',
          href: getPermalink('/tree-removal'),
        },
        {
          text: 'Tree Trimming & Pruning',
          href: getPermalink('/tree-trimming-pruning'),
        },
        {
          text: 'Stump Grinding',
          href: getPermalink('/stump-grinding'),
        },
        {
          text: 'Tree Cabling & Bracing',
          href: getPermalink('/tree-cabling-bracing'),
        },
        {
          text: 'Tree Health & Insect Control Treatments',
          href: getPermalink('/tree-health-insect-control'),
        },
      ],
    },
    {
      text: 'Areas We Serve',
      links: [
        {
          text: 'Roseburg, OR',
          href: getPermalink('/roseburg-tree-service'),
        },
        {
          text: 'Glide, OR',
          href: getPermalink('/glide-tree-service'),
        },
        {
          text: 'Sutherlin, OR',
          href: getPermalink('/sutherlin-tree-service'),
        },
        {
          text: 'Winston, OR',
          href: getPermalink('/winston-tree-service'),
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
      text: 'Get a FREE Estimate', href: '/get-a-free-estimate/', class: 'outline', target: '_self'
    },
  ],
  actionsAlt: [
    {
      text: 'Call Us (541) 643-7064', href: 'tel:541-643-7064', target: '_self'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Tree Removal', href: '/tree-removal/' },
        { text: 'Tree Trimming & Pruning', href: '/tree-trimming-pruning/' },
        { text: 'Stump Grinding', href: '/stump-grinding/' },
        { text: 'Tree Cabling & Bracing', href: '/tree-cabling-bracing/' },
        { text: 'Tree Health & Insect Control Treatments', href: '/tree-health-insect-control/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about/' },
        { text: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Roseburg, OR'},
        { text: '(541) 643-7064', href: 'tel:541-643-7064' },
        // { text: 'info@malkuchsyardandtreeservice.com', href: 'mailto:malkuchsyardandtreeservice.com' },
      ],
    }
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    //{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/malkuchs_tree_service/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/MalkuchsYardAndTreeService' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
  &copy; ${new Date().getFullYear()} Malkuch's Tree Service.
    All rights reserved.
  `,
};
