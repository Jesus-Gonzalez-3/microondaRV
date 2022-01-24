<?php

namespace App\Http\Controllers;

use App\Models\VentasReportesModel;
use Barryvdh\DomPDF\PDF;
use Dompdf\Dompdf;
use Dompdf\Frame\Factory;
use Illuminate\Config\Repository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\View\Factory as ViewFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;

class GeneradorReportesExcel extends Controller
{
    public function ExportarExcel()
    {
        $doc = new Spreadsheet();
        $doc
            ->getProperties()
            ->setCreator("ME")
            ->setLastModifiedBy('Laravel PHP')
            ->setTitle('ENVASES MICROONDA')
            ->setDescription('REPORTE DE VENTAS');

        $hojaDeVentas = $doc->getActiveSheet();
        $hojaDeVentas->setTitle("VENTAS");

        # Encabezado de los productos
        $encabezado = ["Folio Documento", "Documento", "Clave del Producto", "Producto", "Agente", "Unidades Vendidas", "Precio Unidad", "Total"];
        # El último argumento es por defecto A1
        $hojaDeVentas->fromArray($encabezado, null, 'A3');


        $data = VentasReportesModel::select(
            'folio_documento',
            'documento',
            'clave_producto',
            'desc_producto',
            'nombre_agente',
            'cantidad_unidades',
            'precio_pesos',
            DB::raw('cantidad_unidades * precio_pesos AS Total')
        )
            ->where('documento', '=', 'Factura Directa')
            ->limit(20000)
            ->get();


        for ($i = 0; $i < count($data); $i++) {
            $clave_doc = $data[$i]->folio_documento;
            $documento = $data[$i]->documento;
            $clave_prod = $data[$i]->clave_producto;
            $desc_prod = $data[$i]->desc_producto;
            $agente = $data[$i]->nombre_agente;
            $unidades = $data[$i]->cantidad_unidades;
            $precio = $data[$i]->precio_pesos;
            $total = $data[$i]->Total;

            $hojaDeVentas->setCellValueByColumnAndRow(1, $i + 4, $clave_doc);
            $hojaDeVentas->setCellValueByColumnAndRow(2, $i + 4, $documento);
            $hojaDeVentas->setCellValueByColumnAndRow(3, $i + 4, $clave_prod);
            $hojaDeVentas->setCellValueByColumnAndRow(4, $i + 4, $desc_prod);
            $hojaDeVentas->setCellValueByColumnAndRow(5, $i + 4, $agente);
            $hojaDeVentas->setCellValueByColumnAndRow(6, $i + 4, $unidades);
            $hojaDeVentas->setCellValueByColumnAndRow(7, $i + 4, $precio);
            $hojaDeVentas->setCellValueByColumnAndRow(8, $i + 4, $total);
        }
        $hojaDeVentas->setCellValueByColumnAndRow(1, count($data) + 2, 'hola');
        # Crear un "escritor"
        $writer = new Xlsx($doc);
        # Le pasamos la ruta de guardado
        $namefile = 'doc_exportados/Exportado_ventas_' . (Auth::user()->name) . '.xlsx';
        $writer->save($namefile);
        return redirect('/reporteAll');
    }

    public function ExportarExcel2()
    {
        $inputFilename = 'doc_exportados/Ventas.xlsx';
        $doc = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFilename);
        $doc
            ->getProperties()
            ->setCreator("ME")
            ->setLastModifiedBy('Laravel PHP')
            ->setTitle('ENVASES MICROONDA')
            ->setDescription('REPORTE DE VENTAS');

        $hojaDeVentas = $doc->getActiveSheet();
        $hojaDeVentas->setTitle("VENTAS");

        # Encabezado de los productos
        $encabezado = ["Folio Documento", "Documento", "Clave del Producto", "Producto", "Agente", "Unidades Vendidas", "Precio Unidad", "Total"];
        # El último argumento es por defecto A1
        $hojaDeVentas->fromArray($encabezado, null, 'A3');


        $data = VentasReportesModel::select(
            'folio_documento',
            'documento',
            'clave_producto',
            'desc_producto',
            'nombre_agente',
            'cantidad_unidades',
            'precio_pesos',
            DB::raw('cantidad_unidades * precio_pesos AS Total')
        )
            ->where('documento', '=', 'Factura Directa')
            ->limit(20000)
            ->get();


        for ($i = 0; $i < count($data); $i++) {
            $clave_doc = $data[$i]->folio_documento;
            $documento = $data[$i]->documento;
            $clave_prod = $data[$i]->clave_producto;
            $desc_prod = $data[$i]->desc_producto;
            $agente = $data[$i]->nombre_agente;
            $unidades = $data[$i]->cantidad_unidades;
            $precio = $data[$i]->precio_pesos;
            $total = $data[$i]->Total;

            $hojaDeVentas->setCellValueByColumnAndRow(1, $i + 4, $clave_doc);
            $hojaDeVentas->setCellValueByColumnAndRow(2, $i + 4, $documento);
            $hojaDeVentas->setCellValueByColumnAndRow(3, $i + 4, $clave_prod);
            $hojaDeVentas->setCellValueByColumnAndRow(4, $i + 4, $desc_prod);
            $hojaDeVentas->setCellValueByColumnAndRow(5, $i + 4, $agente);
            $hojaDeVentas->setCellValueByColumnAndRow(6, $i + 4, $unidades);
            $hojaDeVentas->setCellValueByColumnAndRow(7, $i + 4, $precio);
            $hojaDeVentas->setCellValueByColumnAndRow(8, $i + 4, $total);
        }
        # Crear un "escritor"
        $writer = new Xlsx($doc);
        # Le pasamos la ruta de guardado
        $namefile = 'doc_exportados/Exportado_ventas_' . (Auth::user()->name) . '.xlsx';
        $writer->save($namefile);
        return redirect('/reporteAll');
    }

    public function GenerarReportePDF()
    {
        /*$pdf =  app('dompdf.wrapper');
        $pdf->setPaper('letter', 'landscape');
        $pdf->setOptions([
            'enable_remote' => true,
            'defaultFont' => 'arial 12pt'
        ]);
        $data = [
            'ventas' => VentasReportesModel::limit(500)->get()
        ];
        return $pdf->loadView('reportes_export/exportarpdf', $data)->download('archivo.pdf');*/

        $ventas = VentasReportesModel::where('documento', '=', 'Factura Directa')
            ->limit(20000)
            ->get();
        return $ventas;
    }
}
