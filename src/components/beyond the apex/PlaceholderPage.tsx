type PlaceholderPageProps = {
  title: string;
};

const PlaceholderPage = ({ title }: PlaceholderPageProps) => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>{title}</h1>
        <h2>待翻译 / Coming soon</h2>
      </div>
      <div className="body">
        <p lang="en">
          This page is listed in the official Beyond the Apex table of contents. The bilingual translation has not been added yet.
        </p>
        <p className="text-muted-foreground" lang="zh">
          本页已按官方目录收录，双语正文尚未翻译。将按 1-x 逐页更新。
        </p>
      </div>
    </div>
  </>
);

export default PlaceholderPage;
