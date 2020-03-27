type ThemeOptions = 'light' | 'dark' | 'auto'

const darkThemeMatch = matchMedia('(prefers-color-scheme: dark)')

const retrieveThemeSetting = () => {
  const savedThemeSetting = localStorage.getItem('theme') ?? 'auto'
  if (savedThemeSetting === 'auto') {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } else {
    return savedThemeSetting
  }
}

const saveThemeSetting = (theme: ThemeOptions) =>
  localStorage.setItem('theme', theme)

export { darkThemeMatch, retrieveThemeSetting, saveThemeSetting }
