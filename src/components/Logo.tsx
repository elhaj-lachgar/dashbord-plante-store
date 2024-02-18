import cn from "classnames"
function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/plants-store-logo-green.svg"
      alt="logo image"
      className={cn(className ? className : "w-[50px]")}
    />
  );
}

export default Logo;
