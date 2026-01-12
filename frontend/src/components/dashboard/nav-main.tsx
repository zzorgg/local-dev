import { type Icon } from "@tabler/icons-react"
import { Link, useLocation } from "react-router"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon | any | string
  }[]
}) {
  const location = useLocation()
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild isActive={location.pathname === item.url}>
                <Link to={item.url} className="flex items-center gap-2">
                  {typeof item.icon === 'string' ? (
                    <img src={item.icon} alt={item.title} className="size-4" />
                  ) : item.icon?.svg ? (
                    <svg
                      dangerouslySetInnerHTML={{ __html: item.icon.svg }}
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: item.icon.hex }}
                    />
                  ) : item.icon ? (
                    <item.icon className="size-4" />
                  ) : null}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
