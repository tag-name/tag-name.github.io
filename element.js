customElements.define(
  "tag-name",
  class extends HTMLElement {
    connectedCallback(tag = this.getAttribute("tag"), name) {
      setTimeout(() => {
        this.attachShadow({ mode: "open" }).innerHTML =
          "<t part=all>" +
          // opening <
          "<span part=span>\u2039</span>" +
          // name
          "<n part=tag-name>" +
          (tag || (name = this.innerHTML)) +
          (tag ? " <a>" + (this.getAttribute("attrs") || "") + "</a>" : "") +
          "</n>" +
          // closing >
          "<span part=span>\u203A</span>" +
          (tag
            ? "<n part=name>" +
              this.innerHTML +
              "</n>" +
              // opening < with /
              "<span part=span>\u2039</span><b part=slash>/</b>" +
              "<n part=tag-name>" +
              tag +
              "</n>" +
              // closing >
              "<span part=span>\u203A</span>"
            : "") +
          "<style>:host{white-space:nowrap;cursor:pointer}" +
          "span{line-height:0;font-size:1.7em;position:relative;top:.07em";
        this.onclick = (e) =>
          (document.location =
            this.getAttribute("url") ||
            "https://" + name.trim() + ".github.io");
      });
    }
  }
);
