<template>
  <div class="user">
    <h2>User Database</h2>
    <table style="width:100%">
    <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Sex</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Smith</td>
        <td>13</td>
        <td>Male</td>
    </tr>
    <tr>
        <td>Joanna</td>
        <td>Andrews</td>
        <td>14</td>
        <td>Female</td>
    </tr>
        <td>Carrie</td>
        <td>Lu</td>
        <td>16</td>
        <td>Female</td>
    </table>
     </div>
</template>

<script>
export default {
  name: 'UserDatabase',
  data () {
    return {
      msg: 'User Information'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: rgb(8, 38, 83);
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
}
th {
  text-align: middle;
}
</style>
