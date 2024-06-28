import { useEffect } from "react";
import { useAtom } from "jotai";

import { useAppDispatch, useAppSelector } from "~/shared/hooks";
import { APIService } from "~/shared/services";
import { SketchList } from "~/features/sketches/SketchList";
import { InfiniteCanvas } from "~/shared/components/InfiniteCanvas";
import { selectedSketchUrlAtom } from "~/shared/store/Sketch";
import { SketchModal } from "~/features/sketches/SketchModal";

export function SketchListPage() {
  const { sketches } = useAppSelector((state) => state.sketches);
  const dispatch = useAppDispatch();
  const [selectedSketchUrl, setSelectedSketchUrl] = useAtom(selectedSketchUrlAtom);

  useEffect(() => {
    // スケッチを取得する関数
    const fetchSketches = () => {
      dispatch(APIService.getSketches());
    };

    // コンポーネントがマウントされた時にスケッチを取得
    fetchSketches();

    // 定期的にスケッチを更新
    const interval = setInterval(fetchSketches, 1000); // 1秒ごとに更新

    // コンポーネントのアンマウント時にインターバルをクリア
    return () => clearInterval(interval);
  }, [dispatch]);

  if (!sketches) return <p>Loading...</p>;
  return (
    <div className="h-screen-without-header w-screen">
      <InfiniteCanvas>
        <div className="p-10">
          <SketchList sketches={sketches} />
        </div>
      </InfiniteCanvas>
      {selectedSketchUrl && (
        <SketchModal selectedSketchUrl={selectedSketchUrl} setSelectedSketchUrl={setSelectedSketchUrl} />
      )}
    </div>
  );
}
