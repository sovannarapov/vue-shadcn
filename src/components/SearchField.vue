<script lang="ts" setup>
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="w-full flex-1">
    <form>
      <div class="relative">
        <Search
          class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        />
        <Input
          class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          placeholder="Search products..."
          type="search"
        />
      </div>
    </form>
  </div>
</template>
