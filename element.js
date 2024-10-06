customElements.define(
  "tag-name",
  class extends HTMLElement {
    connectedCallback(name) {
      setTimeout(() => {
        this.attachShadow({ mode: "open" }).innerHTML =
          "<t part=tag-name>" + // let the user style shadowDOM with ::part(tag-name)
          "<span part=span>\u2039</span>" + // opening bracket, user can style with ::part(span)
          "<n part=name>" +
          (name = this.innerHTML) +
          "</n>" +
          "<span part=span>\u203A</span>" +
          "<style>:host{white-space:nowrap;cursor:pointer}" +
          "span{line-height:0;font-size:1.7em;position:relative;top:.07em";
        this.onclick = (e) =>
          (document.location = "https://" + name.trim() + ".github.io");
      });
    }
  }
);
