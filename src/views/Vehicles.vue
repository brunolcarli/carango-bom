<template>
    <section class="container">
        <div class="row align-content-center justify-content-center vh-100">
            <div class="col-md-8 p-0">
                <table class="table table-hover text-center">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Valor</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-edit" title="Editar"></i>
                                </span>
                            </td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-trash" title="Excluir"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-edit" title="Editar"></i>
                                </span>
                            </td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-trash" title="Excluir"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-edit" title="Editar"></i>
                                </span>
                            </td>
                            <td>
                                <span class="icon is-small">
                                    <i class="fas fa-trash" title="Excluir"></i>
                                </span>
                            </td>
                            <!-- <td><i class="fas fa-edit"></i></td>
                            <td><i class="fas fa-trash"></i></td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Anterior</a>
                    </li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-secondary" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link text-secondary" href="#">Próximo</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style></style>