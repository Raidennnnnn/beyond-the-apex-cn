type PlaceholderPageProps = {
  title: string;
};

const PlaceholderPage = ({ title }: PlaceholderPageProps) => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>{title}</h1>
        <h2 className="bilingual-title">
          <span lang="en">Coming soon</span>
          <span className="bilingual-sep"> / </span>
          <span lang="zh">待翻译</span>
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            This page is listed in the official Beyond the Apex table of contents. The bilingual translation has not been added yet.
          </p>
          <p lang="zh">
            本页已按官方目录收录，双语正文尚未翻译。将按 1-x 逐页更新。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PlaceholderPage;
