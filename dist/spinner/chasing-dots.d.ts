import { OnDestroy } from "@angular/core";
export declare class ChasingDotsComponent implements OnDestroy {
    private visible;
    private timeout;
    delay: number;
    isRunning: boolean;
    private cancel();
    ngOnDestroy(): any;
}
