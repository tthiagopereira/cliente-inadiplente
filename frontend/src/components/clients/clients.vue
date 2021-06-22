<template>
  <div class="clients">
    <div class="row alert alert-info">
      Lista de clientes inadiplentes
    </div>

    <button class="btn btn-info" v-if="!form" @click="viewForm">Cadastrar cliente</button>
    <div v-if="form">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" v-model="cliente.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleInputPassword1">Nome do cliente</label>
            <input type="text" v-model="cliente.name" class="form-control" id="exampleInputPassword1" placeholder="nome do cliente" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Status</label>
            <select class="form-control" v-model="cliente.status" id="exampleFormControlSelect1" required>
              <option></option>
              <option>Inadiplente</option>
<!--              <option></option>-->
            </select>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="form-group">
            <label for="titulo">Titulo</label>
            <select class="form-control" v-model="cliente.titulo" id="titulo" required>
              <option></option>
              <option>Atrasado</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="valor">Valor</label>
            <input type="text" class="form-control" v-model="cliente.valor" id="valor" placeholder="valor" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="data">Data</label>
            <input type="date" class="form-control" v-model="cliente.desde" id="data" required>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-5" @click="store">Registrar</button>
      <button type="submit" class="btn btn-danger mt-5" @click="viewForm">Cancelar</button>
    </div>

    <div class="row mt-3">
      <div class="col-md-12">
        <div>
          <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
          <b-table
              striped hover
              :items="items"
              :fields="fields"
              small
              :filter="filter"
          ></b-table>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./_clients.js" lang="js"></script>
<style src="./_clients.css" lang="css" scoped></style>
