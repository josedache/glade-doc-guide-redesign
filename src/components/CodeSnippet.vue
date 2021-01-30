<template>
  <div class="code-snippet">
    <span class="code-snippet__title h6">{{ title }}</span>
    <prism-editor
      class="code-snippet__editor"
      :value='code'
      line-numbers
      readonly
      :highlight="highlighter"
    >
    </prism-editor>
  </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "CodeSnippet",
  props: ["title", "code"],
  components: {
    PrismEditor,
  },
  data() {
    return {
      // code:
      //   '<script type="text/javascript" src="https://api.glade.ng/checkout.js" />',
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    },
  },
};
</script>

<style lang="scss" scoped>
.code-snippet {
  margin: 16px 0;

  &__title {
    font-weight: bolder;
  }

  &__editor {
    margin-top: 16px;
    background: #2d2d2d;
    color: #ccc;

    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 16px;
  }
}

.prism-editor {
  &__textarea:focus {
    outline: none;
    padding: 16px;
  }

  &__line-numbers {
    /* padding: 8px; */
    border-right: 1px solid lightgray;
  }

  &__container {
  }
}
</style>