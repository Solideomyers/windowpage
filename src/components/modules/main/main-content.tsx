const MainContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      id='main-content'
      role='main'
      className={`
        container
        mx-auto
        w-full
        flex-grow
        min-w-full
        overflow-x-hidden
        `}
    >
      {children}
    </main>
  );
};

export default MainContent;
