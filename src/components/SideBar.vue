<script lang="ts" setup>
import { Home, Package, Package2, Users } from 'lucide-vue-next';
</script>

<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <RouterLink class="flex items-center gap-2 font-semibold" to="/">
          <Package2 class="h-6 w-6" />
          <span class="">Acme Inc</span>
        </RouterLink>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <RouterLink
            exact-active-class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
            class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            to="/dashboard"
          >
            <Home class="h-4 w-4" />
            Dashboard
          </RouterLink>
          <RouterLink
            exact-active-class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
            class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            to="/products"
          >
            <Package class="h-4 w-4" />
            Products
          </RouterLink>
          <RouterLink
            exact-active-class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
            class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            to="customers"
          >
            <Users class="h-4 w-4" />
            Customers
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>
