import { useParams, Navigate } from 'react-router-dom'

const pages: Record<string, { title: string; body: string[] }> = {
  imprint: {
    title: 'Imprint',
    body: [
      'Stice Rivera is a demo apparel storefront built for illustrative purposes.',
      'Contact: hello@sticerivera.com',
      'This site does not process real orders or payments.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    body: [
      'By using this site, you agree to browse and shop in good faith. All product descriptions, pricing, and availability are illustrative.',
      'We reserve the right to update pricing, product availability, and these terms at any time without prior notice.',
      'Orders placed through this demo storefront are not fulfilled and no charges are made.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    body: [
      'We respect your privacy. This demo site does not collect, store, or transmit any personal or payment information you enter.',
      'Any data entered into forms on this site (checkout, contact) stays in your browser only and is never sent to a server.',
      'If this were a live store, this policy would describe what data we collect, how it is used, and your rights over it.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    body: [
      'We accept returns within 30 days of delivery for unworn, unwashed items with original tags attached.',
      'Refunds are issued to the original payment method within 5–10 business days of receiving your return.',
      'Sale items are final sale unless defective. Contact us before returning a defective item for instructions.',
    ],
  },
  withdrawal: {
    title: 'Withdrawal Form',
    body: [
      'To exercise your right of withdrawal, please notify us within 14 days of receipt by emailing hello@sticerivera.com with your order number.',
      'Please state that you wish to withdraw from your purchase agreement and include the item(s) concerned.',
      'Goods must be returned in their original condition within 14 days of your withdrawal notice.',
    ],
  },
}

export default function Legal() {
  const { page } = useParams()
  const content = page ? pages[page] : undefined

  if (!content) return <Navigate to="/legal/imprint" replace />

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="font-display text-4xl mb-10">{content.title}</h1>
      <div className="space-y-5 text-sm text-ink/80 leading-relaxed">
        {content.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
