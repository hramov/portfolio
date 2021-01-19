<template>
  <div class="container">
    <h2>Навыки</h2>
    <div class="table-responsive">
      <table class="table table-reflow">
        <thead>
          <tr>
            <th scope="col">Технология</th>
            <th scope="col">Опыт работы, лет</th>
            <th scope="col">Количество проектов, шт</th>
            <th scope="col">Уверенность использования</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skills" :key="skill.id">
            <td>{{ skill.title }}</td>
            <td class="text-center">{{ skill.yoe }}</td>
            <td class="text-center">{{ skill.prCount }}</td>
            <td>
              <div style="overflow: hidden">
                <div style="width: 100%">
                  <div v-for="i in skill.confidence" :key="i" style="float: left; width: 20px; height: 20px; background-color: green; margin-right: 5px;"></div>
                  <div v-for="j in (10 - skill.confidence)" :key="j" style="float: left; width: 20px; height: 20px; background-color: red; margin-right: 5px;"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>