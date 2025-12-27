export function buildGaInlineScript(gaId: string) {
    if (!gaId) return '';

    return `(function () {
  try {
    const GA_ID = '${gaId}';
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} // eslint-disable-line no-unused-vars
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  } catch (e) {
    console.error('GA load error:', e);
  }
})();`;
}
