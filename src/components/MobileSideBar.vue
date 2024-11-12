<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Menu, Package, Package2, Users } from 'lucide-vue-next';
</script>
<template>
  <header
    class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
  >
    <Sheet>
      <SheetTrigger as-child>
        <Button class="shrink-0 md:hidden" size="icon" variant="outline">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent class="flex flex-col" side="left">
        <nav class="grid gap-2 text-lg font-medium">
          <RouterLink
            exact-active-class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            class="flex items-center gap-2 text-lg font-semibold"
            to="/"
          >
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </RouterLink>
          <RouterLink
            exact-active-class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            to="/dashboard"
          >
            <Home class="h-5 w-5" />
            Dashboard
          </RouterLink>
          <RouterLink
            exact-active-class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            to="/products"
          >
            <Package class="h-5 w-5" />
            Products
          </RouterLink>
          <RouterLink
            exact-active-class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            to="/customers"
          >
            <Users class="h-5 w-5" />
            Customers
          </RouterLink>
        </nav>
      </SheetContent>
    </Sheet>
  </header>
</template>
