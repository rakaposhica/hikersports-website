export default function SiteFooter() {
  return (
    <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <div className="container px-4 md:px-6">&copy; {new Date().getFullYear()} HikerSports. All rights reserved.</div>
    </footer>
  )
}
