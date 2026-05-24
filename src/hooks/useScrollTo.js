/**
 * useScrollTo
 * Reusable hook untuk smooth scroll ke elemen berdasarkan ID.
 *
 * @returns {{ scrollTo: (id: string) => void }}
 *
 * @example
 * const { scrollTo } = useScrollTo();
 * scrollTo("Projects");
 */
export function useScrollTo() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollTo };
}
