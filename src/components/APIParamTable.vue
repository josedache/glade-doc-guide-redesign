<template>
  <div class="api-param-table">
    <p class="api-param-table__title h6">{{ title }}</p>
    <table>
      <tr>
        <th>Parameters</th>
        <th>Meaning</th>
        <th>Option</th>
      </tr>
      <tr v-for="{ name, meaning, option } in data" :key="name">
        <td>
          <code> {{ name }}</code>
        </td>
        <td>{{ meaning }}</td>
        <td>
          <span
            :class="[
              'option',
              option.toLowerCase() === 'optional' ? 'option--optional' : '',
            ]"
          >
            {{ option }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "APIParamTable",
  props: ["title", "data"],
};
</script>

<style lang="scss">
@use '../utils' as *;

.api-param-table {
  %item {
    border: 1px solid #ddd;
    padding: 12px;
  }

  &__title {
    font-weight: bolder;
  }
  & table {
    border-collapse: collapse;

    & tr {
      & th {
        @extend %item;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: $primary-main;
        color: $primary-contrastText;
      }

      & td {
        @extend %item;

        & code {
          color: $primary-dark;
          padding: 0.25rem 0.5rem;
          margin: 0;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }

        & .option {
          padding: 6px;
          border-radius: 4px;
          background-color: $error-light;
          &--optional {
            background-color: $success-light;
          }
        }
      }

      &:nth-child(even) {
        background-color: #f2f2f2;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>