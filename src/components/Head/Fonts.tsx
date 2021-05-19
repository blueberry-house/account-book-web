export default function Fonts() {
	return (
		<>
			<link href="fonts/fonts.css" rel="stylesheet" />
			<link rel="preload" as="font" href={`fonts/NotoSansKR-Light.woff2`} crossOrigin="true" />
			<link rel="preload" as="font" href={`fonts/NotoSansKR-Regular.woff2`} crossOrigin="true" />
			<link rel="preload" as="font" href={`fonts/NotoSansKR-Medium.woff2`} crossOrigin="true" />
			<link rel="preload" as="font" href={`fonts/NotoSansKR-Bold.woff2`} crossOrigin="true" />
			<link rel="preload" as="font" href={`fonts/NotoSansKR-Black.woff2`} crossOrigin="true" />
		</>
	)
}
