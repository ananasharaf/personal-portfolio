/**
 * portfolio-data.js
 * Unified client-side data layer & local database for Anan Aysha Asharaf Portfolio
 * Automatically synchronizes blogs, testimonials, services, FAQs, stats, settings, and leads.
 */

(function (window) {
  'use strict';

  const STORAGE_KEY = 'anan_portfolio_db_v1';
  const AUTH_KEY = 'anan_portfolio_auth_token';

  // Default initial data
  const DEFAULT_DATA = {
    settings: {
      siteTitle: "#best performance marketer in kottayam kerala | Anan Aysha",
      keyword: "#best performance marketer in kottayam kerala",
      heroHeadlineSolid: "PERFORMANCE MARKETER",
      heroHeadlineOutline: "& SOCIAL MEDIA MANAGER",
      heroSubtext: "I help e-commerce brands, institutions, and businesses across Kerala scale revenue through high-converting Meta & Google Ads, organic viral social media growth, and data-backed creative funnels.",
      heroBadgeText: "Open for High-Impact Projects",
      yearsExp: 2,
      campaignsScaled: 20,
      skillsMastered: 35,
      email: "ananasharaf45@gmail.com",
      phone: "+91 70120 97827",
      whatsapp: "+917012097827",
      location: "Kerala, India",
      linkedin: "https://www.linkedin.com/in/anan-aysha-asharaf-489ba9330",
      adminPassword: "admin" // Default admin password
    },
    seo: {
      metaTitle: "#best performance marketer in kottayam kerala | Anan Aysha",
      metaDescription: "I am Anan Aysha Asharf , a best performance marketer & social media manager in Kottayam Kerala, expert in Meta Ads, Google Ads, content & growth.",
      keywords: "#best performance marketer in kottayam kerala, performance marketer kerala, social media manager kochi, meta ads specialist kerala, digital marketing kerala, Anan Aysha Asharf",
      author: "Anan Aysha Asharf",
      canonicalUrl: "https://ananaysha.com/",
      ogTitle: "#best performance marketer in kottayam kerala | Anan Aysha",
      ogDescription: "I am Anan Aysha Asharf , a best performance marketer & social media manager in Kottayam Kerala, expert in Meta Ads, Google Ads, content & growth.",
      ogImage: "https://ananaysha.com/og-image.jpg",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterHandle: "@ananasharaf",
      robots: "index, follow",
      gaMeasurementId: "",
      metaPixelId: "",
      schemaType: "Person"
    },
    about: {
      bioHeading: "Architecting High-Growth Digital Funnels Across Kerala & Beyond",
      subHeading: "#best performance marketer in kottayam kerala",
      bioText1: "I am Anan Aysha Asharaf, a performance marketing specialist and social media growth strategist based in Kerala. With over 2 years of hands-on execution, I help D2C brands, educational institutes, and regional businesses acquire high-intent customers profitably.",
      bioText2: "My approach combines psychological ad hooks, broad AI-driven Meta CBO scaling, and automated lead qualification funnels that turn passive scrollers into loyal customers.",
      skills: [
        { name: "UI/UX Designer", icon: "🎨" },
        { name: "Digital Marketer", icon: "🚀" },
        { name: "Performance Marketer", icon: "📈" },
        { name: "Social Media Manager", icon: "📱" }
      ],
      clientSatisfaction: "99%",
      adSpendManaged: "₹50L+"
    },
    team: [
      {
        id: "team-1",
        name: "Hashim Nazar",
        role: "Senior Growth Strategist & Media Buyer",
        avatar: "HN",
        bio: "Specializing in high-budget Meta CBO scaling and conversion rate optimization across D2C brands.",
        linkedin: "https://www.linkedin.com/in/hashimnazar"
      },
      {
        id: "team-2",
        name: "Siddharth Verma",
        role: "Creative Director & Copywriter",
        avatar: "SV",
        bio: "Crafting viral short-form video hooks, carousel storyboards, and high-converting ad copy.",
        linkedin: "https://www.linkedin.com"
      }
    ],
    blogs: [
      {
        id: "blog-1",
        title: "How to Scale Meta Ads to ₹10L/Month in Kerala (2026 Strategy Guide)",
        category: "Performance Marketing",
        readTime: "5 min read",
        date: "Sept 18, 2026",
        emoji: "🎯",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        excerpt: "A breakdown of winning creative frameworks, broad targeting shifts, and funnel optimization that delivered 3.8x ROAS for regional D2C brands.",
        content: `
          <h4>The Era of Creative-First Performance Marketing</h4>
          <p>Gone are the days when intricate audience slicing and micro-interests produced sustainable ROAS on Meta Ads. In 2026, the algorithm is the targeting — and your creative assets are the targeting mechanism.</p>
          
          <div class="blog-modal-quote">
            "Stop trying to outsmart Meta's machine learning with 40 ad sets. Feed it high-intent creative variations and let the conversion API optimize for profit."
          </div>

          <h4>Key Pillars of Our 3.8x ROAS Framework</h4>
          <div class="blog-modal-pillars">
            <div class="blog-pillar">
              <div class="blog-pillar-title">1. Broad Advantage+ Scaling</div>
              <p>Consolidating budget into 1–2 master CBO campaigns with diverse angle-specific creatives.</p>
            </div>
            <div class="blog-pillar">
              <div class="blog-pillar-title">2. Malayalam-English Hybrid Hooks</div>
              <p>Leveraging native cultural relatability for instant 3-second hook retention.</p>
            </div>
            <div class="blog-pillar">
              <div class="blog-pillar-title">3. Post-Click Velocity</div>
              <p>Optimizing landing pages for sub-2-second mobile load time and 1-tap WhatsApp checkouts.</p>
            </div>
          </div>

          <h4>Implementation Checklist for Brands</h4>
          <ul class="blog-modal-checklist">
            <li>Verify Meta Pixel & Server-Side Conversions API (CAPI) with 9.0+ match quality.</li>
            <li>Test 3 hook variations for every winning core video ad.</li>
            <li>Implement dynamic catalog remarketing with custom localized overlays.</li>
          </ul>
        `,
        featured: true,
        status: "published"
      },
      {
        id: "blog-2",
        title: "Organic Instagram Growth Blueprint: From Zero to 50K Active Followers",
        category: "Social Media Strategy",
        readTime: "4 min read",
        date: "Sept 12, 2026",
        emoji: "📱",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        excerpt: "Why follower count is a vanity metric unless paired with high-intent DM automation, regional storytelling, and retention loops.",
        content: `
          <h4>Attention is Cheap, Community is Valuable</h4>
          <p>Most Kerala brands make the fatal mistake of chasing viral views with irrelevant trends. Viral reach that doesn't convert into brand equity or paying customers is purely an expense.</p>

          <div class="blog-modal-quote">
            "A tight audience of 10,000 local fans will consistently outperform an untargeted 100K follower base in real cash flow."
          </div>

          <h4>The 3-Tier Content Engine</h4>
          <div class="blog-modal-pillars">
            <div class="blog-pillar">
              <div class="blog-pillar-title">Top of Funnel (Viral Hooks)</div>
              <p>Relatable regional pain points, industry myths debunked, fast visual transitions.</p>
            </div>
            <div class="blog-pillar">
              <div class="blog-pillar-title">Middle of Funnel (Authority)</div>
              <p>Client transformations, behind-the-scenes case studies, breakdown breakdowns.</p>
            </div>
            <div class="blog-pillar">
              <div class="blog-pillar-title">Bottom of Funnel (Conversion)</div>
              <p>Direct offer posts, DM trigger keywords, limited batch enrollment alerts.</p>
            </div>
          </div>
        `,
        featured: false,
        status: "published"
      },
      {
        id: "blog-3",
        title: "Why Most Lead Gen Campaigns Fail in Calicut & Kochi (And How to Fix Them)",
        category: "Lead Acquisition",
        readTime: "6 min read",
        date: "Aug 29, 2026",
        emoji: "📊",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        excerpt: "Slashing cost-per-lead by 42% by replacing friction-heavy native forms with interactive qualifying quizzes.",
        content: `
          <h4>The Low-Quality Lead Trap</h4>
          <p>If your sales team complains that 80% of leads are 'not picking up' or 'just clicked by mistake', your lead form is too frictionless. Here is how we fixed that for Kerala academies.</p>

          <h4>The Solution: Micro-Commitment Funnels</h4>
          <p>By adding 2 qualifying multiple-choice questions before the contact form, lead volume dropped slightly by 10%, but sales conversion soared by 3.2x, reducing effective Cost Per Customer by 42%.</p>
        `,
        featured: false,
        status: "published"
      }
    ],
    testimonials: [
      {
        id: "test-1",
        stars: 5,
        quote: "Hashim completely overhauled our performance marketing strategy. Within 60 days of taking over our Meta ads, our customer acquisition cost dropped by 38% while revenue hit record highs. The best performance marketer and social media manager in Kerala without doubt!",
        name: "Zainab Ameen",
        role: "Founder & Creative Director, Zariyah Apparel (Kochi)",
        avatar: "ZA"
      },
      {
        id: "test-2",
        stars: 5,
        quote: "Working with Hashim on our social media management transformed our brand presence. His data-backed content hooks and organic viral strategies helped us scale our community from 4,000 to over 45,000 engaged followers across Kerala in just 4 months.",
        name: "Rahul Menon",
        role: "Co-Founder & CMO, Malabar D2C Organics",
        avatar: "RM"
      },
      {
        id: "test-3",
        stars: 5,
        quote: "We needed high-intent student admissions for our tech bootcamps in Calicut. Hashim structured targeted Google Search and Meta Lead Gen funnels that slashed our CPL by 42% and delivered 100% batch fill rates month after month.",
        name: "Faisal Shamsudheen",
        role: "Managing Director, SkillCraft Academy",
        avatar: "FS"
      },
      {
        id: "test-4",
        stars: 5,
        quote: "From creative ad copy to high-converting short-form video strategies, Hashim brings unmatched execution speed. If you are looking for high-ROI performance marketing and top-tier social media management in Kerala, Hashim is the go-to expert.",
        name: "Anand Narayanan",
        role: "Head of Growth, Manzio Media Studio",
        avatar: "AN"
      }
    ],
    services: [
      {
        id: "srv-1",
        icon: "📈",
        title: "Performance Marketing & Paid Ads",
        desc: "End-to-end management of Meta (Facebook & Instagram) and Google Ads campaigns. From audience research and high-converting ad copy to creative strategy and budget scaling.",
        tags: ["Meta Ads", "Google Ads", "ROAS Scaling", "Lookalike Audiences"]
      },
      {
        id: "srv-2",
        icon: "📱",
        title: "Social Media Management & Growth",
        desc: "Building a magnetic brand presence on Instagram and LinkedIn. Content calendar planning, viral reel hooks, community engagement, and consistent organic audience growth.",
        tags: ["Instagram Growth", "Content Calendar", "Community Building", "Reels Strategy"]
      },
      {
        id: "srv-3",
        icon: "✨",
        title: "Content Strategy & Creative Direction",
        desc: "Crafting scroll-stopping ad creatives, carousel graphics, video storyboards, and persuasive copywriting that turn passive scrollers into paying customers.",
        tags: ["Ad Copywriting", "Canva & Creatives", "Video Hooks", "Brand Voice"]
      },
      {
        id: "srv-4",
        icon: "🎯",
        title: "Social Media & Funnel Audits",
        desc: "Analysing your existing social presence and marketing funnels to pinpoint drop-offs. Delivering actionable roadmaps to boost engagement, lead flow, and conversion rates.",
        tags: ["Account Audit", "Funnel Optimization", "Competitor Analysis", "Growth Roadmap"]
      },
      {
        id: "srv-5",
        icon: "📊",
        title: "Analytics & ROI Tracking",
        desc: "Translating metrics into business growth. Setting up conversion tracking, custom dashboards, and performance reporting to ensure every marketing rupee performs.",
        tags: ["Google Analytics", "Meta Pixel", "Attribution", "Monthly Reports"]
      }
    ],
    faqs: [
      {
        id: "faq-1",
        q: "Who is Anan Aysha Asharf?",
        a: "Anan Aysha Asharf is recognized as the best performance marketer and social media manager in Kerala. She specialises in crafting data-driven campaigns, social media growth strategies, Meta & Google Ads, and high-converting marketing funnels for leading brands."
      },
      {
        id: "faq-2",
        q: "What services do you offer?",
        a: "I offer Performance Marketing, Social Media Management, Meta & Google Ads Campaigns, Content Strategy, Ad Creative Design, Social Media Audits, and ROI Analytics — covering the full spectrum from brand awareness to scaling revenue."
      },
      {
        id: "faq-3",
        q: "Are you available for freelance projects?",
        a: "Yes! I am open to freelance projects, full-time opportunities, and strategic collaborations. Whether you need a high-impact ad campaign, social media management, or an ongoing marketing partnership, feel free to reach out."
      },
      {
        id: "faq-4",
        q: "What tools and platforms do you use?",
        a: "For marketing and social media management, I actively work with Meta Ads Manager (Facebook & Instagram), Google Ads, Google Analytics, Meta Business Suite, Canva, Adobe Creative Suite, and SEO/SEM tracking tools."
      },
      {
        id: "faq-5",
        q: "How can I get in touch with you?",
        a: "You can reach me via email at <a href=\"mailto:ananasharaf45@gmail.com\" style=\"color:var(--accent1)\">ananasharaf45@gmail.com</a> or connect with me on <a href=\"https://www.linkedin.com/in/anan-aysha-asharaf-489ba9330\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:var(--accent1)\">LinkedIn</a>. I typically respond within 24 hours."
      }
    ],
    messages: [
      {
        id: "msg-1",
        name: "Siddharth Verma",
        email: "siddharth@example.com",
        subject: "Scaling Meta Ads for D2C Brand",
        message: "Hi Anan, we are launching an organic beauty line in Kerala and need an expert to run our Meta Ad funnels starting next month. Let's schedule a call!",
        date: "Sept 19, 2026, 11:20 AM",
        read: false
      }
    ]
  };

  // Database Access Layer
  const PortfolioDB = {
    // Load data from localStorage or fallback to default
    load: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            settings: Object.assign({}, DEFAULT_DATA.settings, parsed.settings || {}),
            seo: Object.assign({}, DEFAULT_DATA.seo, parsed.seo || {}),
            about: Object.assign({}, DEFAULT_DATA.about, parsed.about || {}),
            team: Array.isArray(parsed.team) ? parsed.team : DEFAULT_DATA.team,
            blogs: (Array.isArray(parsed.blogs) ? parsed.blogs : DEFAULT_DATA.blogs).map(b => {
              const def = DEFAULT_DATA.blogs.find(d => d.id === b.id);
              if (def && !b.image) b.image = def.image;
              return b;
            }),
            testimonials: Array.isArray(parsed.testimonials) ? parsed.testimonials : DEFAULT_DATA.testimonials,
            services: Array.isArray(parsed.services) ? parsed.services : DEFAULT_DATA.services,
            faqs: Array.isArray(parsed.faqs) ? parsed.faqs : DEFAULT_DATA.faqs,
            messages: Array.isArray(parsed.messages) ? parsed.messages : DEFAULT_DATA.messages
          };
        }
      } catch (e) {
        console.warn('PortfolioDB: Falling back to default data due to read error', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    },

    // Save entire database
    save: function (data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('portfolioDataUpdated', { detail: data }));
        try {
          window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY, newValue: JSON.stringify(data) }));
        } catch (e) { }
        return true;
      } catch (e) {
        console.error('PortfolioDB: Save error', e);
        return false;
      }
    },

    // Settings
    getSettings: function () {
      return this.load().settings;
    },
    saveSettings: function (newSettings) {
      const data = this.load();
      data.settings = Object.assign({}, data.settings, newSettings);
      if (newSettings.siteTitle) {
        data.seo = data.seo || {};
        data.seo.metaTitle = newSettings.siteTitle;
      }
      if (newSettings.keyword) {
        data.seo = data.seo || {};
        data.seo.keywords = newSettings.keyword;
      }
      return this.save(data);
    },

    // SEO
    getSEO: function () {
      return this.load().seo;
    },
    saveSEO: function (newSEO) {
      const data = this.load();
      data.seo = Object.assign({}, data.seo, newSEO);
      if (newSEO.metaTitle) {
        data.settings = data.settings || {};
        data.settings.siteTitle = newSEO.metaTitle;
      }
      if (newSEO.keywords) {
        data.settings = data.settings || {};
        data.settings.keyword = newSEO.keywords;
      }
      return this.save(data);
    },

    // About
    getAbout: function () {
      return this.load().about;
    },
    saveAbout: function (newAbout) {
      const data = this.load();
      data.about = Object.assign({}, data.about, newAbout);
      return this.save(data);
    },

    // Team
    getTeam: function () {
      return this.load().team;
    },
    saveTeamMember: function (member) {
      const data = this.load();
      if (!data.team) data.team = [];
      if (!member.id) member.id = 'team-' + Date.now();
      if (!member.avatar && member.name) {
        member.avatar = member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      }
      const idx = data.team.findIndex(t => t.id === member.id);
      if (idx >= 0) {
        data.team[idx] = member;
      } else {
        data.team.push(member);
      }
      return this.save(data);
    },
    deleteTeamMember: function (memberId) {
      const data = this.load();
      if (!data.team) return true;
      data.team = data.team.filter(t => t.id !== memberId);
      return this.save(data);
    },

    // Blogs
    getBlogs: function () {
      return this.load().blogs;
    },
    saveBlog: function (blog) {
      const data = this.load();
      if (!blog.id) {
        blog.id = 'blog-' + Date.now();
      }
      const idx = data.blogs.findIndex(b => b.id === blog.id);
      if (idx >= 0) {
        data.blogs[idx] = blog;
      } else {
        data.blogs.unshift(blog);
      }
      return this.save(data);
    },
    deleteBlog: function (blogId) {
      const data = this.load();
      data.blogs = data.blogs.filter(b => b.id !== blogId);
      return this.save(data);
    },

    // Testimonials
    getTestimonials: function () {
      return this.load().testimonials;
    },
    saveTestimonial: function (test) {
      const data = this.load();
      if (!test.id) {
        test.id = 'test-' + Date.now();
      }
      if (!test.avatar && test.name) {
        test.avatar = test.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      }
      const idx = data.testimonials.findIndex(t => t.id === test.id);
      if (idx >= 0) {
        data.testimonials[idx] = test;
      } else {
        data.testimonials.push(test);
      }
      return this.save(data);
    },
    deleteTestimonial: function (testId) {
      const data = this.load();
      data.testimonials = data.testimonials.filter(t => t.id !== testId);
      return this.save(data);
    },

    // Services
    getServices: function () {
      return this.load().services;
    },
    saveService: function (srv) {
      const data = this.load();
      if (!srv.id) srv.id = 'srv-' + Date.now();
      const idx = data.services.findIndex(s => s.id === srv.id);
      if (idx >= 0) {
        data.services[idx] = srv;
      } else {
        data.services.push(srv);
      }
      return this.save(data);
    },
    deleteService: function (srvId) {
      const data = this.load();
      data.services = data.services.filter(s => s.id !== srvId);
      return this.save(data);
    },

    // FAQs
    getFAQs: function () {
      return this.load().faqs;
    },
    saveFAQ: function (faq) {
      const data = this.load();
      if (!faq.id) faq.id = 'faq-' + Date.now();
      const idx = data.faqs.findIndex(f => f.id === faq.id);
      if (idx >= 0) {
        data.faqs[idx] = faq;
      } else {
        data.faqs.push(faq);
      }
      return this.save(data);
    },
    deleteFAQ: function (faqId) {
      const data = this.load();
      data.faqs = data.faqs.filter(f => f.id !== faqId);
      return this.save(data);
    },

    // Messages / Leads
    getMessages: function () {
      return this.load().messages;
    },
    addMessage: function (msg) {
      const data = this.load();
      msg.id = 'msg-' + Date.now();
      msg.date = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
      msg.read = false;
      data.messages.unshift(msg);
      return this.save(data);
    },
    markMessageRead: function (msgId) {
      const data = this.load();
      const m = data.messages.find(x => x.id === msgId);
      if (m) m.read = true;
      return this.save(data);
    },
    deleteMessage: function (msgId) {
      const data = this.load();
      data.messages = data.messages.filter(m => m.id !== msgId);
      return this.save(data);
    },

    // Authentication
    login: function (password) {
      const settings = this.getSettings();
      const validPass = settings.adminPassword || 'admin';
      if (password === validPass) {
        sessionStorage.setItem(AUTH_KEY, 'authenticated_' + Date.now());
        return true;
      }
      return false;
    },
    isAuthenticated: function () {
      return !!sessionStorage.getItem(AUTH_KEY);
    },
    logout: function () {
      sessionStorage.removeItem(AUTH_KEY);
    },

    // Backup & Restore
    exportJSON: function () {
      const data = this.load();
      const str = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", str);
      downloadAnchor.setAttribute("download", "anan_portfolio_backup_" + new Date().toISOString().slice(0, 10) + ".json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    },
    importJSON: function (jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        if (parsed.settings || parsed.blogs) {
          this.save(parsed);
          return true;
        }
      } catch (e) {
        console.error('PortfolioDB: Import JSON error', e);
      }
      return false;
    },
    resetToDefaults: function () {
      localStorage.removeItem(STORAGE_KEY);
      this.save(DEFAULT_DATA);
      return true;
    }
  };

  // Expose globally
  window.PortfolioDB = PortfolioDB;

})(window);
