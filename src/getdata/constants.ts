// query constants
export const baseUrl = 'https://www.telegraaf.nl/sitemap'
export const baseSelector = 'div[id^="folder"] > div.opened > div > span:nth-child(2)'
export const articleSelector = 'pretty-print'
export const headers = {
  cookie:
    'didomi_token=eyJ1c2VyX2lkIjoiMTg2N2ExZDgtOTFhYy02MGMzLTgwNDAtNjg2YjZhNDljYzExIiwiY3JlYXRlZCI6IjIwMjMtMDItMjJUMTc6MTM6MjUuMTcwWiIsInVwZGF0ZWQiOiIyMDIzLTAyLTIyVDE3OjEzOjI1LjE3MFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzphZG9iZS10YWdtYW5hZ2VyIiwiYzpkYXRhYXBpaC1NV0R4ZnB5eSIsImM6cXVhbGlmaW8tM1V3UEFYZzYiLCJjOnB1YnN0YWNrLWlZaGZRM2hRIiwiYzpmYWNlYm9vay1iajRGSkZIVyIsImM6b21uaXR1cmUtYWRvYmUtYW5hbHl0aWNzIiwiYzpibHVlY29uaWMtcGx1Z2luIiwiYzpyZWQtYnktc2ZyIiwiYzppbnRlbGxpYWQiLCJjOmltcGFjdC1yYWRpdXMiLCJjOmJhdGNoLWpYUHhNTUxOIiwiYzpnZXRzaXRlY29uLTlDcXpHN1o2IiwiYzppb3RlY2hub2wteVlwY2Z0ZHoiLCJjOmN4ZW5zZS1wanh0OVA4ZyIsImM6Z29vZ2xlYW5hLTNRM21GcTIyIiwiYzpnb29nbGVhbmEtN0ZkODNpV1UiLCJjOm5leHRyb2xsLUdEbnBBREdiIiwiYzp6YWxhbmRvLXBUS1lWTWFiIiwiYzp2aXJ0dWFsbW4tRU1Bek1MRFciLCJjOnBtZy1aRTJDeUNGayIsImM6b21uaWNvbW1lLXlQaWo3Z1laIiwiYzppbnRlcnB1YmxpLThIWjhQZkczIiwiYzpnc2tpbm5lci1uVUUzNFAySCIsImM6ZG1haW5zdGl0LWZ6UTh5QWlyIiwiYzpiZXRnZW5pdXMtQnRoNmo4UkQiLCJjOm1lZGlhaHVpcy16WmhBRUZwUCIsImM6bWVkaWFodWlzLVVoTjMyRnFxIl19LCJwdXJwb3NlcyI6eyJlbmFibGVkIjpbInNvY2lhbF9tZWRpYSIsInVpdGdlYnJlaWQtQU1OMmNoZXQiLCJnZXphbWVubGlqLUpWNlh4VGJZIl19LCJ2ZXJzaW9uIjoyLCJhYyI6IkMteUJnQUVJQUl3QVdRQXVnQnNBRDBBSlVBVVFBeEFCNGdEOUFKdUFWSUF6NEJ1QURnQUhtZ1BjQTk0Q1BnSHFnUWJBaVNCR2NDV0lFdFFKZGdTX0FuNEJRb0Npb0ZWUUxEZ1dwQXh1Qm5NRFhJSFRnT3JBZGhCQjZDSUVFWm9KTlFUdkFvSUJRZUNuVUY5Zy5BQUFBIn0=; csrftoken=gAHppzFAQGNT9wVV8i3dt7BXr81tIlHnVoesZeSclhi8FV1VdIqXzjIb5ymqmAw1',
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
}