declare module 'pal/input' {
    type InputSourceButton = import('pal/input/input-source').InputSourceButton;
    type InputSourceStick = import('pal/input/input-source').InputSourceStick;
    type InputSourceDpad = import('pal/input/input-source').InputSourceDpad;
    type InputSourcePosition = import('pal/input/input-source').InputSourcePosition;
    type InputSourceOrientation = import('pal/input/input-source').InputSourceOrientation;

    type TouchCallback = (res: import('cocos/input/types').EventTouch) => void;
    /**
     * Class designed for touch input.
     */
    export class TouchInputSource {
        /**
         * Register the touch event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: TouchCallback, target?: any);
    }

    type MouseCallback = (res: import('cocos/input/types').EventMouse) => void;
    /**
     * Class designed for mouse input.
     */
    export class MouseInputSource {
        /**
         * Register the mouse event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: MouseCallback, target?: any);

        public dispatchMouseDownEvent? (nativeMouseEvent: any);
        public dispatchMouseMoveEvent? (nativeMouseEvent: any);
        public dispatchMouseUpEvent? (nativeMouseEvent: any);
        public dispatchScrollEvent? (nativeMouseEvent: any);
    }

    type KeyboardCallback = (res: import('cocos/input/types').EventKeyboard) => void;
    /**
     * Class Designed for keyboard input.
     */
    export class KeyboardInputSource {
        /**
         * Register the keyboard event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: KeyboardCallback, target?: any);

        public dispatchKeyboardDownEvent? (nativeKeyboardEvent: any);
        public dispatchKeyboardUpEvent? (nativeKeyboardEvent: any);
    }

    export type GamepadCallback = (res: import('cocos/input/types/event').EventGamepad) => void;

    /**
     * Class designed for gamepad input
     */
    export class GamepadInputDevice {
        /**
         * @engineInternal
         */
        public static _init ();
        /**
         * @engineInternal
         */
        public static _on (eventType: import('cocos/input/types/event-enum').InputEventType, cb: GamepadCallback, target?: any);

        public static all: GamepadInputDevice[];
        /**
         * @en The gamepad device id
         * @zh �ֱ��豸 id
         */
        public get deviceId (): number;
        /**
         * @en whether the gamepad is connected
         * @zh �ֱ��Ƿ�������״̬
         */
        public get connected (): boolean;
        /**
         * @en  The control button in the north direction which is generally the button Y
         * @zh ���ڱ���Ŀ��ư�����һ���ǰ��� Y
         */
        public get buttonNorth (): InputSourceButton;
        /**
         * @en  The control button in the east direction which is generally the button B
         * @zh ���ڶ���Ŀ��ư�����һ���ǰ��� B
         */
        public get buttonEast (): InputSourceButton;
        /**
         * @en  The control button in the west direction which is generally the button X
         * @zh ��������Ŀ��ư�����һ���ǰ��� X
         */
        public get buttonWest (): InputSourceButton;
        /**
         * @en  The control button in the south direction which is generally the button A
         * @zh ��������Ŀ��ư�����һ���ǰ��� A
         */
        public get buttonSouth (): InputSourceButton;

        /**
         * @en The button L1
         * @zh ���� L1
         */
        public get buttonL1 (): InputSourceButton;
        /**
         * @en The button L2
         * @zh ���� L2
         */
        public get buttonL2 (): InputSourceButton;
        /**
         * @en The button L3
         * @zh ���� L3
         */
        public get buttonL3 (): InputSourceButton;
        /**
         * @en The button R1
         * @zh ���� R1
         */
        public get buttonR1 (): InputSourceButton;
        /**
         * @en The button R2
         * @zh ���� R2
         */
        public get buttonR2 (): InputSourceButton;
        /**
         * @en The button R3
         * @zh ���� R3
         */
        public get buttonR3 (): InputSourceButton;

        // public get buttonTouchPad (): InputSourceButton;
        // public get buttonHome (): InputSourceButton;

        /**
         * @en The button Share
         * @zh ������
         */
        public get buttonShare (): InputSourceButton;
        /**
         * @en The button Options
         * @zh ѡ���
         */
        public get buttonOptions (): InputSourceButton;

        /**
         * @en The dpad buttons
         * @zh ���򰴼�
         */
        public get dpad (): InputSourceDpad;
        /**
         * @en The left stick
         * @zh ��ҡ��
         */
        public get leftStick (): InputSourceStick;
        /**
         * @en The right stick
         * @zh ��ҡ��
         */
        public get rightStick (): InputSourceStick;

        /**
         * @en The button Menu
         * @zh �˵�����
         */
        public get buttonMenu (): InputSourceButton;
        /**
         * @en The button Start
         * @zh ��ʼ����
         */
        public get buttonStart (): InputSourceButton;
        /**
         * @en The button LeftStick
         * @zh ��ҡ�˰���
         */
        public get buttonLeftStick (): InputSourceButton;
        /**
         * @en The button RightStick
         * @zh ��ҡ�˰���
         */
        public get buttonRightStick (): InputSourceButton;
    }

    type AccelerometerCallback = (res: import('cocos/input/types').EventAcceleration) => void;
    /**
     * Class designed for accelerometer input
     */
    export class AccelerometerInputSource {
        /**
         * Asynchronously start the accelerometer.
         * TODO: return a promise.
         */
        public start ();
        /**
         * Stop the accelerometer.
         * TODO: return a promise.
         */
        public stop ();
        /**
         * Set interval of the accelerometer callback.
         * The interval is in mile seconds.
         * @param intervalInMileSeconds interval in mile seconds.
         */
        public setInterval (intervalInMileSeconds: number);
        /**
         * Register the acceleration event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: AccelerometerCallback, target?: any);
    }

    type HandleCallback = (res: import('cocos/input/types').EventHandle) => void;
    /**
     * Class designed for handle input.
     */
    export class HandleInputDevice {
        /**
         * Register the handle event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: HandleCallback, target?: any);

        /**
         * @en  The control button in the north direction which is generally the button Y
         * @zh ���ڱ���Ŀ��ư�����һ���ǰ��� Y
         */
        public get buttonNorth (): InputSourceButton;
        /**
         * @en  The control button in the east direction which is generally the button B
         * @zh ���ڶ���Ŀ��ư�����һ���ǰ��� B
         */
        public get buttonEast (): InputSourceButton;
        /**
         * @en  The control button in the west direction which is generally the button X
         * @zh ��������Ŀ��ư�����һ���ǰ��� X
         */
        public get buttonWest (): InputSourceButton;
        /**
         * @en  The control button in the south direction which is generally the button A
         * @zh ��������Ŀ��ư�����һ���ǰ��� A
         */
        public get buttonSouth (): InputSourceButton;

        /**
         * @en The button Left Trigger
         * @zh ��������
         */
        public get buttonTriggerLeft (): InputSourceButton;
        /**
         * @en The button Right Trigger
         * @zh �Ұ������
         */
        public get buttonTriggerRight (): InputSourceButton;
        /**
         * @en The grab Left Trigger
         * @zh �����۶�
         */
        public get triggerLeft (): InputSourceButton;
        /**
         * @en The grab Right Trigger
         * @zh �Ұ���۶�
         */
        public get triggerRight (): InputSourceButton;
        /**
         * @en The grab Left Grip
         * @zh ���ֱ���ס
         */
        public get gripLeft (): InputSourceButton;
        /**
         * @en The grab Right Grip
         * @zh ���ֱ���ס
         */
        public get gripRight (): InputSourceButton;

        /**
         * @en The left stick
         * @zh ��ҡ��
         */
        public get leftStick (): InputSourceStick;
        /**
         * @en The right stick
         * @zh ��ҡ��
         */
        public get rightStick (): InputSourceStick;

        /**
         * @en The button Left Stick
         * @zh ��ҡ�˰���
         */
        public get buttonLeftStick (): InputSourceButton;
        /**
         * @en The button Right Stick
         * @zh ��ҡ�˰���
         */
        public get buttonRightStick (): InputSourceButton;

        /**
         * @en The position Left hand
         * @zh ����λ��
         */
        public get handLeftPosition (): InputSourcePosition;
        /**
         * @en The orientation Left hand
         * @zh ���ַ���
         */
        public get handLeftOrientation (): InputSourceOrientation;
        /**
         * @en The position Right hand
         * @zh ����λ��
         */
        public get handRightPosition (): InputSourcePosition;
        /**
         * @en The orientation Right hand
         * @zh ���ַ���
         */
        public get handRightOrientation (): InputSourceOrientation;

        /**
         * @en The position Left aim
         * @zh ������λ��
         */
        public get aimLeftPosition (): InputSourcePosition;
        /**
         * @en The orientation Left aim
         * @zh �����߷���
         */
        public get aimLeftOrientation (): InputSourceOrientation;
        /**
         * @en The position Right aim
         * @zh ������λ��
         */
        public get aimRightPosition (): InputSourcePosition;
        /**
         * @en The orientation Right aim
         * @zh �����߷���
         */
        public get aimRightOrientation (): InputSourceOrientation;
    }

    type HMDCallback = (res: import('cocos/input/types').EventHMD) => void;
    /**
     * Class designed for handle input.
     */
    export class HMDInputDevice {
        /**
         * Register the hmd event callback.
         */
        public on (eventType: import('cocos/input/types/event-enum').InputEventType, callback: HMDCallback, target?: any);

        /**
         * @en The position Left view
         * @zh �󴰿�λ��
         */
        public get viewLeftPosition (): InputSourcePosition;
        /**
         * @en The orientation Left view
         * @zh �󴰿ڷ���
         */
        public get viewLeftOrientation (): InputSourceOrientation;
        /**
         * @en The position Right view
         * @zh �Ҵ���λ��
         */
        public get viewRightPosition (): InputSourcePosition;
        /**
         * @en The orientation Right view
         * @zh �Ҵ��ڷ���
         */
        public get viewRightOrientation (): InputSourceOrientation;
        /**
         * @en The position Middle head
         * @zh ͷ���м�λ��
         */
        public get headMiddlePosition (): InputSourcePosition;
        /**
         * @en The orientation Middle head
         * @zh ͷ���м䷽��
         */
        public get headMiddleOrientation (): InputSourceOrientation;
    }
}
