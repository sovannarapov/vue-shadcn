<script lang="ts" setup>
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-vue-next';
</script>
<template>
  <Tabs default-value="all">
    <div class="flex items-center">
      <TabsList>
        <TabsTrigger value="all"> All</TabsTrigger>
        <TabsTrigger value="active"> Active</TabsTrigger>
        <TabsTrigger value="inactive"> Inactive</TabsTrigger>
      </TabsList>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button class="h-7 gap-1" size="sm" variant="outline">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem checked> Active</DropdownMenuItem>
            <DropdownMenuItem>Inactive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button class="h-7 gap-1" size="sm" variant="outline">
          <File class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <Button class="h-7 gap-1" size="sm">
          <PlusCircle class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Customer
          </span>
        </Button>
      </div>
    </div>
    <TabsContent value="all">
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription> Manage your customers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="hidden w-[100px] sm:table-cell">
                  <span class="sr-only">img</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead class="hidden xl:table-cell">Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead class="hidden xl:table-cell"> Address </TableHead>
                <TableHead class="hidden xl:table-cell">
                  Date of birth
                </TableHead>
                <TableHead class="hidden xl:table-cell"> Created at </TableHead>
                <TableHead>
                  <span class="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  laser@gmail.com</TableCell
                >
                <TableCell>
                  <Badge variant="outline"> Inactive</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium">
                  Hypernova Headphones
                </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  hypernova@gmail.com
                </TableCell>
                <TableCell>
                  <Badge variant="outline"> Active</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2023-10-18 03:21 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium"> AeroGlow Desk Lamp </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  aeroglow@gmail.com
                </TableCell>
                <TableCell>
                  <Badge variant="outline"> Active</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2023-11-29 08:15 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium">
                  TechTonic Energy Drink
                </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  techtonic@gmail.com
                </TableCell>
                <TableCell>
                  <Badge variant="secondary"> Inactive</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2023-12-25 11:59 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium">
                  Gamer Gear Pro Controller
                </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  gamergear@gmail.com
                </TableCell>
                <TableCell>
                  <Badge variant="outline"> Active</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2024-01-01 12:00 AM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="hidden sm:table-cell">
                  <img
                    alt="Profile photo"
                    class="aspect-square rounded-md object-cover"
                    height="64"
                    src=""
                    width="64"
                  />
                </TableCell>
                <TableCell class="font-medium"> Luminous VR Headset </TableCell>
                <TableCell class="font-medium hidden xl:table-cell">
                  luminous@gmail.com
                </TableCell>
                <TableCell>
                  <Badge variant="outline"> Active</Badge>
                </TableCell>
                <TableCell class="hidden xl:table-cell"> Phnom Penh </TableCell>
                <TableCell class="hidden xl:table-cell"> 2023-07-12 </TableCell>
                <TableCell class="hidden xl:table-cell">
                  2024-02-14 02:14 PM
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div class="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong>
            customers
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</template>
