/**
 * Custom element definition for "tag-name".
 *
 * This custom element displays a tag name with optional attributes and a URL redirection on click.
 *
 * @class
 * @extends HTMLElement
 *
 * @method connectedCallback
 * @param {string} [tag] - The tag name to display. Defaults to the value of the "tag" attribute.
 * @param {string} [name] - The name to use for URL redirection. Defaults to the innerHTML of the element.
 *
 * @description
 * When the element is connected to the DOM, it sets up its shadow DOM with the appropriate HTML structure
 * and styles. It also sets up an onclick event handler that redirects the user to a URL based on the "url"
 * attribute or the name of the element.
 *
 * @example
 * <tag-name tag="example" attrs="some-attributes" url="https://example.com">Example</tag-name>
 */
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
              (name = this.innerHTML) +
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
