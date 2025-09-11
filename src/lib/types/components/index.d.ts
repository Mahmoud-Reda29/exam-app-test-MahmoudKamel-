import { ReactElement, ReactNode } from "react";

export = Components
export as namespace Components

declare namespace Components {

       /**
        * Represents the visibility state of a dropdown component.
        * 
        * `true` means the dropdown is currently open/visible.  
        * `false` means the dropdown is closed/invisible.
       */
       declare type StatusDropdown = {
              status: boolean
       }

       /**
        * Represents the props for a header component that describes each page.
        * 
        * `title`: The display name of the page shown in the header.   
        * `icon`: The icon associated with the page, displayed alongside the title.
        */
       declare type HeaderPage = {
              title:string,
              icon:ReactElement,
              showButtonBack?:boolean
       }

       /**
        * Defines the props for the `Asidebar` component, representing a customizable sidebar layout.
        * 
        * - `header`: Optional React element to render at the top of the sidebar.  
        *   If not provided, the default header will be displayed.  
        *   If set to `null`, the header will be hidden.
        * 
        * - `bodyLinks`: An optional list of links to display in the main section of the sidebar.  
        *   If omitted, the default set of links will be shown.
        * 
        * - `footer`: Optional React element to render at the bottom of the sidebar.  
        *   If not provided, the default footer will be displayed.  
        *   If set to `null`, the footer will be hidden.
        * 
        * - `className`: Additional custom CSS classes for the sidebar container.
       */
       declare type Container = {
              id?:string,
              className?:string,
              children:ReactNode
       }

       /**
        * Defines the structure of a single navigation link within the sidebar tabs.
        * 
        * Each link contains:             
        * `icon` (optional): A React element representing the link’s icon, displayed before the name.  
        *   Can be omitted if no icon is needed.   
        * `name`: The visible text label for the link (e.g., the tab name or menu item).              
        * `path`: The navigation path (URL) that the link points to.
        * 
        * Typically used inside the `bodyLinks` of the `Asidebar` component to render
        * tab links or menu items in the sidebar’s main section.
       */
       declare type AsideBodyLinks = {
              pathTarget:string,
              icon?:ReactElement 
              name:string, 
              styleActiveLink:string
       }
}

