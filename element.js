customElements.define(
  "tag-name",
  class extends HTMLElement {
    connectedCallback(name) {
      setTimeout(() => {
        this.attachShadow({ mode: "open" }).innerHTML =
          "<span part=tag-name>" + // let the user style shadowDOM with ::part(tag-name)
          "<span part=span>\u2039</span>" + // opening bracket, user can style with ::part(span)
          "<span part=name>" +
          (name = this.innerHTML) +
          "</span>" +
          "<span part=span>\u203A</span>" +
          "<style>:host{white-space:nowrap}" +
          ":host(:hover){cursor:pointer}" +
          "[part=span]{line-height:0;font-size:170%;position:relative;top:.07em";
        this.onclick = (_) =>
          (document.location = `https://${name.trim()}.github.io`);
      });
    }
  }
);
