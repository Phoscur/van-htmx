import htmx from 'htmx.org';
// fix to load extensions per https://github.com/bigskysoftware/htmx/issues/1690 
// because "Extensions don't have UMD wrapper"
window.htmx = htmx;
export default htmx;