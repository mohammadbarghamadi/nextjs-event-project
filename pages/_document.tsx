import Document, { Head, Main, Html, NextScript } from "next/document";

export default class MyNextClass extends Document {
    render() {
        return (
            <Html lang="fa">
                <Head />
                <body>
                    <div id="react-portal"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}