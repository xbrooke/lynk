// custom.js
const giscusConfig = {
    repo: 'xbrooke/lynk-giscus',
    repoID: 'R_kgDOKkX5JA',
    mapping: 'pathname',
    category: 'Q&A',
  };
  
  if (document.getElementById('giscus')) {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.onload = () => {
      new Giscus(giscusConfig).render('giscus');
    };
    document.getElementById('giscus').appendChild(script);
  }
  