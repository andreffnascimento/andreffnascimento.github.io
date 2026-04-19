// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-ve-completed-my-msc-in-computer-science-and-engineering-at-instituto-superior-técnico-ist",
          title: 'I’ve completed my MSc in Computer Science and Engineering at Instituto Superior Técnico...',
          description: "",
          section: "News",},{id: "news-our-paper-automated-exploit-generation-for-node-js-packages-was-accepted-at-pldi-25",
          title: 'Our paper Automated Exploit Generation for Node.js Packages  was accepted at PLDI’25.',
          description: "",
          section: "News",},{id: "news-i-won-fully-funded-phd-scholarship-sponsored-by-fundação-para-a-ciência-e-tecnologia-fct",
          title: 'I won fully-funded PhD scholarship, sponsored by Fundação para a Ciência e Tecnologia...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-theory-and-practice-of-static-analysis-tpsa-workshop-in-popl-26-titled-how-to-identify-security-vulnerabilities-in-node-js-packages-together-with-filipe-marques",
          title: 'I gave a talk at the Theory and Practice of Static Analysis (TPSA)...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-pl-lx-epsilon-hosted-by-outsystems-titled-how-to-find-and-exploit-vulnerabilities-in-node-js-packages-together-with-filipe-marques",
          title: 'I gave a talk at PL@LX Epsilon hosted by OutSystems titled: “How to...',
          description: "",
          section: "News",},{id: "news-i-am-back-teaching-software-engineering-to-third-year-bsc-students-at-instituto-superior-técnico",
          title: 'I am back teaching Software Engineering to third-year BSc students at Instituto Superior...',
          description: "",
          section: "News",},];
