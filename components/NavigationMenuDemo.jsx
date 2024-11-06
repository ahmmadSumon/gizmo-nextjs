"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "../lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/ShadcnMenu"

// List of product categories and important pages for the gadget shop
const categories = [
  {
    title: "Laptops",
    href: "/shop/laptops",
    description: "Find the best laptops for work, gaming, and everything in between.",
  },
  {
    title: "Smartphones",
    href: "/shop/smartphones",
    description: "Latest models from top brands with the best deals.",
  },
  {
    title: "Tablets",
    href: "/shop/tablets",
    description: "Explore tablets for entertainment, work, and education.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description: "Shop phone cases, chargers, headphones, and more.",
  },
  {
    title: "Smart Home",
    href: "/shop/smart-home",
    description: "Transform your home with smart gadgets and appliances.",
  },
  {
    title: "Deals & Offers",
    href: "/shop/deals",
    description: "Check out the latest discounts, bundles, and limited-time offers.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/shop" title="All Products">
                Browse all the latest gadgets and tech.
              </ListItem>
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Customer Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/support/contact" title="Contact Us">
                Reach out to our support team for any questions or issues.
              </ListItem>
              <ListItem href="/support/faq" title="FAQ">
                Find answers to common questions about orders and products.
              </ListItem>
              <ListItem href="/support/shipping" title="Shipping & Delivery">
                Learn about our shipping methods, delivery times, and costs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/account/orders" title="My Orders">
                Track your previous orders and manage your purchases.
              </ListItem>
              <ListItem href="/account/settings" title="Account Settings">
                Update your profile, preferences, and notifications.
              </ListItem>
              <ListItem href="/account/wishlist" title="Wishlist">
                Keep track of your favorite products for later purchase.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = (({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
