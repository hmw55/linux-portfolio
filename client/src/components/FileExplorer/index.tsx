import { useState } from "react";
import Window from "../Window";
import "./fileexplorer.css"

import fileFolderIcon from "../../assets/icons/file-folder.png";
import appIcon from "../../assets/icons/app-launcher-icon.png";
import photoFolderIcon from "../../assets/icons/photo-folder.png";

export type Folder = {
    name: string;
    type: "folder";
    content?: any[];
    icon: string;
};

interface FileExplorerProps {
    onClose?: () => void;
    zIndex?: number;
}

export default function FileExplorer({ onClose, zIndex = 1 }: FileExplorerProps)  {
    const [folders] = useState<Folder[]>([
        { name: "Pictures", type: "folder", icon: photoFolderIcon, content: [] },
        { name: "Apps", type: "folder", icon: appIcon, content: [] },
        { name: "Documents", type: "folder", icon: fileFolderIcon, content: [] },
    ]);

    return (
        <Window title="File Explorer" onClose={onClose} zIndex={zIndex} width={480} height={400}>
            <div className="file__grid">
                {folders.map(folder => (
                    <div className="folder__icon" key={folder.name}>
                        <img src={folder.icon} alt={folder.name} />
                        <span>{folder.name}</span>
                    </div>
                ))}
            </div>
        </Window>
    )
}