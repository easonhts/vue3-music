import { ref } from 'vue'

export default function useBoolean(value: boolean) {
  const bol = ref(value)

  const toogle = () => {
    bol.value = !bol.value
  }

  return { bol, toogle }
}
