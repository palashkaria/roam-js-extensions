import {
  createBlockObserver,
  getChildRefUidsByBlockUid,
  getRefTitlesByBlockUid,
  getTextTreeByPageName,
  runExtension,
} from "../entry-helpers";
import { getUids } from "roam-client";
import Color from "color";

runExtension("hex-color-preview", () => {
  const HEX_COLOR_PREVIEW_CLASSNAME = "roamjs-hex-color-preview";
  const css = document.createElement("style");
  css.textContent = `span.${HEX_COLOR_PREVIEW_CLASSNAME} {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-left: 4px;
    top: 3px;
    position: relative;
}`;
  document.getElementsByTagName("head")[0].appendChild(css);
  const config = getTextTreeByPageName("roam/js/hex-color-preview");
  const includeLengthsNode = config.find(
    (t) => t.text.toUpperCase() === "INCLUDE LENGTHS"
  );
  const includeLengths = includeLengthsNode
    ? includeLengthsNode.children
        .filter((c) => !Number.isNaN(c.text))
        .map((c) => parseInt(c.text))
    : [];

  const renderColorPreviews = (container: HTMLElement, blockUid: string) => {
    const refs = getRefTitlesByBlockUid(blockUid);
    const renderedRefs = Array.from(
      container.getElementsByClassName("rm-page-ref-tag")
    );
    refs
      .filter(
        (r) => !includeLengths.length || includeLengths.includes(r.length)
      )
      .forEach((r) => {
        try {
          const c = Color(`#${r}`);
          const previewIdPrefix = `hex-color-preview-${blockUid}-${r}-`;
          const renderedRefSpans = renderedRefs.filter(
            (s) =>
              s.getAttribute("data-tag") === r &&
              (!s.lastElementChild ||
                !s.lastElementChild.id.startsWith(previewIdPrefix))
          );
          renderedRefSpans.forEach((renderedRef, i) => {
            const newSpan = document.createElement("span");
            newSpan.style.backgroundColor = c.string();
            newSpan.className = HEX_COLOR_PREVIEW_CLASSNAME;
            newSpan.id = `${previewIdPrefix}${i}`;
            renderedRef.appendChild(newSpan);
          });
        } catch (e) {
          if (
            !e.message ||
            !e.message.startsWith("Unable to parse color from string")
          ) {
            throw e;
          }
        }
      });
  };

  createBlockObserver(
    (b) => renderColorPreviews(b, getUids(b).blockUid),
    (s) => {
      const parent = s.closest(".roam-block") as HTMLDivElement;
      const { blockUid } = getUids(parent);
      const refs = getChildRefUidsByBlockUid(blockUid);
      const index = Array.from(
        parent.getElementsByClassName("rm-block-ref")
      ).indexOf(s);
      renderColorPreviews(s, refs[index]);
    }
  );
});
