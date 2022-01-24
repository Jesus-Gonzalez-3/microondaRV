<?php

namespace App\Http\Controllers;

use App\Models\VentasReportesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportesController extends Controller
{
    public function GetAll()
    {
        $ventas = VentasReportesModel::where('documento', '=', 'Factura Directa')
            ->limit(4200)
            ->get();
        return view('reportes.reporteAll', compact('ventas'));
    }

    public function ReporteVentasUnidadGrafica()
    {
        $data = [];
        $data['producto'] = VentasReportesModel::select('desc_producto', DB::raw('sum(cantidad_unidades) as cantidad_unidades') )
            ->where('documento', '=', 'Factura Directa')
            ->groupBy('desc_producto')
            ->orderBy('cantidad_unidades', 'Asc')
            ->limit(50)
            ->get();

        return $data;
    }
}
