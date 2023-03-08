const aa = () => {
  const b = false
  if (!b) console.log('A')

  return () => {
    return (
      <n-config-provider
        locale="naiveLocale.locale"
        date-locale="naiveLocale.dateLocale"
        theme="layoutTheme"
        theme-overrides="overridesTheme"
      >
        <n-global-style />
        <app-provider>
          <router-view />
        </app-provider>
      </n-config-provider>
    )
  }
}
